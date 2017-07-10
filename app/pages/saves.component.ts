import { Component, OnInit, NgModule } from "@angular/core";
import { Character, DataService } from '../data/datasource';
import { SaveType } from '../data/metadatasource';
import { CharacterLogic } from '../data/characterlogic';
import { ToolbarComponent, CharacterTab } from './toolbar.component';

@Component({
    selector: "saves",
    template: `<GridLayout rows="auto, *">
                <Toolbar [currentLocation]="currentTab" row="0"></Toolbar>
                <StackLayout class="form" row="1">
                    <GridLayout columns="auto, *" rows="auto, auto, auto, auto, auto" class="input-field input-sides">
                        <Label text="Death Ray/Poison" row="0" col="0"></Label>
                        <Label [text]="deathRay" row="0" col="1" class="body"></Label>
                        <Label text="Magic Wand" row="1" col="0"></Label>
                        <Label [text]="wand" row="1" col="1" class="body"></Label>
                        <Label text="Paralysis / Turn Stone" row="2" col="0" class="p-r-5"></Label>
                        <Label [text]="paralysis" row="2" col="1" class="body"></Label>
                        <Label text="Dragon Breath" row="3" col="0"></Label>
                        <Label [text]="dragon" row="3" col="1" class="body"></Label>
                        <Label text="Rod / Staff / Spell" row="4" col="0"></Label>
                        <Label [text]="spell" row="4" col="1" class="body"></Label>
                    </GridLayout>
                </StackLayout>
                </GridLayout>`
})

export class SavesComponent {
    public constructor(private dataService: DataService) { }
    private character: Character;
    private logic: CharacterLogic;
    private currentTab: CharacterTab = CharacterTab.Saves;
    private deathRay: number;
    private wand: number;
    private paralysis: number;
    private dragon: number;
    private spell: number;

    ngOnInit(): void {
        this.character = this.dataService.getSelectedCharacter();
        this.logic = new CharacterLogic(this.character);
        this.deathRay = this.logic.getSave(SaveType.DeathRay);
        this.wand = this.logic.getSave(SaveType.Wand);
        this.paralysis = this.logic.getSave(SaveType.Paralysis);
        this.dragon = this.logic.getSave(SaveType.DragonBreath);
        this.spell = this.logic.getSave(SaveType.RodStaffSpell);
    }
}