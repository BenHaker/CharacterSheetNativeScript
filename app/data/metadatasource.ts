import { Injectable } from '@angular/core';
import { Saves } from './resources/saves'
import { Classes } from './resources/classes'
import { SpellsSlots } from './resources/spells'
import { Skills } from './resources/skills'

export class MetaDataService {
    
    static getClasses = (): string[] => {
        return Classes;
    }

    static getSaves = (classEnum: Class, level: number, saveType: SaveType): number => {
        let index: number = 0;

        if(Saves[classEnum] == null)
            return 0;
        switch(classEnum) {
            case Class.Fighter:
            case Class.Dwarf:
            case Class.Elf:
            case Class.Halfling:
                index = Math.ceil(level / 3) - 1;
                break;
            case Class.Cleric:
            case Class.Thief:
                index = Math.ceil(level / 4) - 1;
                break;
            case Class.MagicUser:
                index = Math.ceil(level / 5) - 1;
                break;
        }
        if(Saves[classEnum][index] == null)
            return 0;
        return Saves[classEnum][index][saveType];
    }

    static getSpellSlots = (classEnum: Class, characterLevel: number, spellLevel: number): number => {
        let slots: number = 0;
        let spells: number[][];

        switch(classEnum) {
            case Class.Fighter:
            case Class.Dwarf:
            case Class.Thief:
            case Class.Halfling:
                return 0;
            case Class.Cleric:
            case Class.Elf:
            case Class.MagicUser:
                spells = SpellsSlots[classEnum];
                if(spells == null)
                    return 0;
                if(spells[characterLevel] == null)
                    slots = spells[spells.length - 1][spellLevel];
                else
                    slots = spells[characterLevel][spellLevel];
                break;
        }
        if(slots == null)
            slots = 0;
        return slots;
    }
}

export enum Class {
    Cleric, Fighter, MagicUser, Thief, Dwarf, Elf, Halfling
}

export enum SaveType {
    DeathRay, Wand, Paralysis, DragonBreath,RodStaffSpell
}