import { Component, OnInit, NgModule } from "@angular/core";
import { Character, DataService } from '../data/datasource';
import { CharacterLogic } from '../data/characterlogic';
import { ToolbarComponent, CharacterTab } from './toolbar.component';

@Component({
    selector: "spellbook",
    template: `<GridLayout rows="auto, *">
                <Toolbar [currentLocation]="currentTab" row="0"></Toolbar>
                <ScrollView row="1" class="form">
                <GridLayout columns="auto, *" rows="auto, auto, auto, auto, auto, auto, auto, auto, auto, auto" class="input-field input-sides">
                    <Label text="Level" row="0" col="0"></Label>
                    <Label text="Spells" row="0" col="1" style="text-align:center;"></Label>
                    <Label text="1" row="1" col="0"></Label>
                    <TextView [(ngModel)]="character.spells1" row="1" col="1"></TextView>
                    <Label text="2" row="2" col="0"></Label>
                    <TextView [(ngModel)]="character.spells2" row="2" col="1"></TextView>
                    <Label text="3" row="3" col="0"></Label>
                    <TextView [(ngModel)]="character.spells3" row="3" col="1"></TextView>
                    <Label text="4" row="4" col="0"></Label>
                    <TextView [(ngModel)]="character.spells4" row="4" col="1"></TextView>
                    <Label text="5" row="5" col="0"></Label>
                    <TextView [(ngModel)]="character.spells5" row="5" col="1"></TextView>
                    <Label text="6" row="6" col="0"></Label>
                    <TextView [(ngModel)]="character.spells6" row="6" col="1"></TextView>
                    <Label text="7" row="7" col="0"></Label>
                    <TextView [(ngModel)]="character.spells7" row="7" col="1"></TextView>
                    <Label text="8" row="8" col="0"></Label>
                    <TextView [(ngModel)]="character.spells8" row="8" col="1"></TextView>
                    <Label text="9" row="9" col="0"></Label>
                    <TextView [(ngModel)]="character.spells9" row="9" col="1"></TextView>
                </GridLayout>
                </ScrollView>
                </GridLayout>`
})

export class SpellbookComponent {
    public constructor(private dataService: DataService) { }
    private character: Character;
    private currentTab: CharacterTab = CharacterTab.Spellbook;
    private logic: CharacterLogic;

    ngOnInit(): void {
        this.character = this.dataService.getSelectedCharacter();
        this.logic = new CharacterLogic(this.character);
    }
}