import { Component, OnInit, NgModule } from "@angular/core";
import { Character, DataService } from '../data/datasource';
import { CharacterLogic } from '../data/characterlogic';
import { ToolbarComponent, CharacterTab } from './toolbar.component';
import { action } from "ui/dialogs";

@Component({
    selector: "character",
    template: `<GridLayout rows="auto, *">
                <Toolbar [currentLocation]="currentTab" row="0"></Toolbar>
                <StackLayout class="form" row="1">
                <GridLayout columns="auto, *" rows="auto, auto, auto, auto, auto, auto" class="input-field input-sides">
                    <Label text="Player Name" row="0" col="0" class="body"></Label>
                    <TextField [(ngModel)]="character.playerName" row="0" col="1" hint="Type Player Name" class="input botton_border"></TextField>
                    <Label text="Character Name" row="1" col="0" class="body p-r-5"></Label>
                    <TextField [(ngModel)]="character.characterName" row="1" col="1" hint="Type Character Name" class="input botton_border"></TextField>
                    <Label text="Alignment" row="2" col="0" class="body"></Label>
                    <TextField [(ngModel)]="character.alignment" row="2" col="1" class="input botton_border"></TextField>
                    <Label text="Class" row="3" col="0" class="body m-t-10"></Label>
                    <Button [text]="characterClass + ' ' + ' ...'" (tap)="displayClassesDialog()" row="3" col="1" class="btn-primary btn-form"></Button>
                    <Label text="Level" row="4" col="0" class="body"></Label>
                    <GridLayout row="4" col="1" columns="auto, *, auto, auto">
                        <Label text="1" row="0" col="0"></Label>
                        <Slider [(ngModel)]="character.level" minValue="1" [maxValue]="maxLevel" row="0" col="1"></Slider>
                        <Label [text]="maxLevel" row="0" col="2"></Label>
                        <Label [text]="'(' + character.level + ')'" row="0" col="3" class="p-l-5 p-r-5" style="width:40;"></Label>
                    </GridLayout>
                    <Label text="XP" row="5" col="0" class="body"></Label>
                    <TextField [(ngModel)]="character.xp" row="5" col="1" keyboardType="number" class="input botton_border"></TextField>
                </GridLayout>
                </StackLayout>
                </GridLayout>`
})

export class CharacterComponent {
    public constructor(private dataService: DataService) { }
    private character: Character;
    private currentTab: CharacterTab = CharacterTab.Character;
    private logic: CharacterLogic;
    private characterClass: string;
    private maxLevel: number;

    ngOnInit(): void {
        let tmp: string;

        this.character = this.dataService.getSelectedCharacter();
        this.logic = new CharacterLogic(this.character);
        tmp = this.logic.getClasses()[this.character.class];
        if(tmp == null || tmp == 'undefined')
            this.characterClass = "";
        else
            this.characterClass = tmp;
        this.maxLevel = this.logic.getMaxLevel();
    }
    
    displayClassesDialog = () => {
        let options = {
            title: "Class Selection",
            message: "Choose Your Class",
            cancelButtonText: "Cancel",
            actions: this.logic.getClasses()
        };
        action(options).then((result) => {
            if(result != "Cancel") {
                this.characterClass = result;
                this.character.class = this.logic.getClasses().indexOf(result);
                if(this.logic.isValidLevel(this.character.level) == false)
                    this.character.level = 1;
                this.maxLevel = this.logic.getMaxLevel();
            }
        });
    }
}