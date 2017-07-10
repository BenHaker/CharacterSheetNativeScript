import { Injectable } from '@angular/core';
import { knownFolders, File, Folder } from "file-system";
import { Class } from './metadatasource';

@Injectable()
export class DataService {
    private characters: Character[];
    private selectedId: number;
    private wasLoaded: boolean = false;
    private folderName: string = "characters-data";
    private fileName: string = "characters.json";
    private loadedFunctions = [];
    private subCode = 0;

    addLoadedEvent = (callback) => {
        this.loadedFunctions[this.subCode] = callback;
        ++this.subCode;
        return this.subCode;
    }

    removeLoadedEvent = (subCode) => {
        delete this.loadedFunctions[subCode];
    }

    loadData = () => {
        let folder = knownFolders.documents().getFolder(this.folderName);
        let file = folder.getFile(this.fileName);

        file.readText()
            .then(data => { 
                if(data != null && data != "")
                    this.characters = JSON.parse(data); 
                else
                    this.characters = new Array<Character>();
                this.wasLoaded = true; 
                this.loadedFunctions.forEach((callback) => callback())})
            .catch(err => console.log(err));
    }

    saveData = () => {
        let folder = knownFolders.documents().getFolder(this.folderName);
        let file = folder.getFile(this.fileName);

        file.writeText(JSON.stringify(this.characters));
    }

    setSelectedCharacter = (id: number) => {
        this.selectedId = id;
    }

    getSelectedCharacter = (): Character => {
        return this.characters.filter(((character) => character.id == this.selectedId), this.selectedId)[0];
    }

    findNextId = (): number => {
        let tmp = this.characters.sort((a, b) => a.id - b.id);
        if(tmp == null || tmp.length == 0)
            return 1;
        return tmp[tmp.length - 1].id + 1;
    }

    getCharacters = (): Character[] => {
        if(this.wasLoaded == false)
            this.loadData();
        return this.characters;
    }

    getCharacter = (id: number): Character => {
        return this.characters.find((character) => character.id == id);
    }

    addCharacter = (): void => {
        this.characters[this.characters.length] = new Character(this.findNextId());
        this.saveData();
    }

    deleteCharacter = (id): void => {
        let index = this.characters.findIndex((character) => character.id == id);
        this.characters.splice(index, 1);
    }
}

export class Character {
    constructor(id: number) {
        this.id = id;
        this.playerName = "New Player";
        this.characterName = "New Character";
        this.level = 1;
        this.xp = 0;
        this.strength = 3;
        this.dexterity = 3;
        this.constitution = 3;
        this.intelligence = 3;
        this.wisdom = 3;
        this.charisma = 3;
        this.ac = 9;
        this.weapons = new Array<Weapon>();
    }

    id: number;
    playerName: string;
    characterName: string;
    alignment: string;
    class: Class;
    level: number;
    xp: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    ac: number;
    weapons: Weapon[];
}

export class Weapon {
    name: string;
    range: string;
    damage: string;
    attack: string;
}