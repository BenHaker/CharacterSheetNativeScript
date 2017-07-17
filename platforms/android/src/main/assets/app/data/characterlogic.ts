import { Character } from './datasource';
import { Class, SaveType, MetaDataService, Ability } from './metadatasource';

export class CharacterLogic {
    private character: Character;
    
    constructor(character: Character) {
        this.character = character;
    }
       
    getAttributeModifier = (attribute: string): number => {
        let attrValue: number;

        if(attribute == null || this.character == null)
            return 0;
        if(this.character[attribute] == null)
            return 0;
        attrValue = this.character[attribute];
        if(typeof(attrValue) == "string")
            attrValue = parseInt(attrValue);
        switch(attrValue)
        {
            case 2:
            case 3:
                return -3;
            case 4:
            case 5:
                return -2;
            case 6:
            case 7:
            case 8:
                return -1;
            case 9:
            case 10:
            case 11:
            case 12:
                return 0;
            case 13:
            case 14:
            case 15:
                return 1;
            case 16:
            case 17:
                return 2;
            case 18:
                return 3;
            default:
                return 0;
        }
    }

    getTHAC0 = () => {
        let level = this.character.level;
        switch(this.character.class) {
            case Class.Fighter:
            case Class.Dwarf:
            case Class.Elf:
            case Class.Halfling:
                return 19 - (Math.ceil(level / 3) - 1) * 2;
            case Class.Cleric:
            case Class.Thief:
                return 19 - (Math.ceil(level / 4) - 1) * 2;
            case Class.MagicUser:
                return 19 - (Math.ceil(level / 5) - 1) * 2;
            default:
                return 19;
        }
    }

    getAttackBonus = () => {
        return 20 - this.getTHAC0();
    }

    getReverseAC = () => {
        return 20 - this.character.ac;
    }

    isValidLevel = (level: number): boolean => {
        if(level < 1)
            return false;
        return level <= this.getMaxLevel()
    }

    getMaxLevel = () => {
        switch(this.character.class) {          
            case Class.Dwarf:
                return 12;
            case Class.Elf:
                return 10;
            case Class.Halfling:
                return 8;
            case Class.Cleric:
            case Class.Fighter:
            case Class.MagicUser:
            case Class.Thief:
                return 36;
        }
        return 36;
    }

    getClasses = (): string[] => {
        return MetaDataService.getClasses();
    }

    getSave = (saveType: SaveType): number => {
        return MetaDataService.getSaves(this.character.class, this.character.level, saveType);
    }

    getSpellSlots = (spellLevel: number): number => {
        return MetaDataService.getSpellSlots(this.character.class, this.character.level, spellLevel);
    }

    getAbilities = (): Ability[] => {
        return MetaDataService.getAbilities(this.character.class, this.character.level);
    }
}