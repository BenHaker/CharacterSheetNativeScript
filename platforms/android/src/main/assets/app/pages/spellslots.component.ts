import { Component, OnInit, NgModule } from "@angular/core";
import { Character, DataService } from '../data/datasource';
import { CharacterLogic } from '../data/characterlogic';
import { ToolbarComponent, CharacterTab } from './toolbar.component';

@Component({
    selector: "spellslots",
    template: `<GridLayout rows="auto, *">
                <Toolbar [currentLocation]="currentTab" row="0"></Toolbar>
                <ScrollView row="1" class="form">
                <GridLayout columns="auto, auto, auto" rows="auto, auto, auto, auto, auto, auto, auto, auto, auto, auto" class="input-field input-sides">
                    <Label text="Level" row="0" col="0" class="body p-r-5"></Label>
                    <Label text="Slots" row="0" col="1" class="body p-r-5"></Label>
                    <Label text="Used" row="0" col="2" class="body p-r-5"></Label>
                    <Label text="1" row="1" col="0" style="text-align: center;"></Label>
                    <Label [text]="logic.getSpellSlots(1)" row="1" col="1" style="text-align: center;"></Label>
                    <TextField [(ngModel)]="character.spellsUsed1" row="1" col="2" keyboardType="number" class="input botton_border" style="text-align: center;"></TextField>
                    <Label text="2" row="2" col="0" style="text-align: center;"></Label>
                    <Label [text]="logic.getSpellSlots(2)" row="2" col="1" style="text-align: center;"></Label>
                    <TextField [(ngModel)]="character.spellsUsed2" row="2" col="2" keyboardType="number" class="input botton_border" style="text-align: center;"></TextField>
                    <Label text="3" row="3" col="0" style="text-align: center;"></Label>
                    <Label [text]="logic.getSpellSlots(3)" row="3" col="1" style="text-align: center;"></Label>
                    <TextField [(ngModel)]="character.spellsUsed3" row="3" col="2" keyboardType="number" class="input botton_border" style="text-align: center;"></TextField>
                    <Label text="4" row="4" col="0" style="text-align: center;"></Label>
                    <Label [text]="logic.getSpellSlots(4)" row="4" col="1" style="text-align: center;"></Label>
                    <TextField [(ngModel)]="character.spellsUsed4" row="4" col="2" keyboardType="number" class="input botton_border" style="text-align: center;"></TextField>
                    <Label text="5" row="5" col="0" style="text-align: center;"></Label>
                    <Label [text]="logic.getSpellSlots(5)" row="5" col="1" style="text-align: center;"></Label>
                    <TextField [(ngModel)]="character.spellsUsed5" row="5" col="2" keyboardType="number" class="input botton_border" style="text-align: center;"></TextField>
                    <Label text="6" row="6" col="0" style="text-align: center;"></Label>
                    <Label [text]="logic.getSpellSlots(6)" row="6" col="1" style="text-align: center;"></Label>
                    <TextField [(ngModel)]="character.spellsUsed6" row="6" col="2" keyboardType="number" class="input botton_border" style="text-align: center;"></TextField>
                    <Label text="7" row="7" col="0" style="text-align: center;"></Label>
                    <Label [text]="logic.getSpellSlots(7)" row="7" col="1" style="text-align: center;"></Label>
                    <TextField [(ngModel)]="character.spellsUsed7" row="7" col="2" keyboardType="number" class="input botton_border" style="text-align: center;"></TextField>
                    <Label text="8" row="8" col="0" style="text-align: center;"></Label>
                    <Label [text]="logic.getSpellSlots(8)" row="8" col="1" style="text-align: center;"></Label>
                    <TextField [(ngModel)]="character.spellsUsed8" row="8" col="2" keyboardType="number" class="input botton_border" style="text-align: center;"></TextField>
                    <Label text="9" row="9" col="0" style="text-align: center;"></Label>
                    <Label [text]="logic.getSpellSlots(9)" row="9" col="1" style="text-align: center;"></Label>
                    <TextField [(ngModel)]="character.spellsUsed9" row="9" col="2" keyboardType="number" class="input botton_border" style="text-align: center;"></TextField>
                </GridLayout>
                </ScrollView>
                </GridLayout>`
})

export class SpellslotsComponent {
    public constructor(private dataService: DataService) { }
    private character: Character;
    private currentTab: CharacterTab = CharacterTab.SpellSlots;
    private logic: CharacterLogic;

    ngOnInit(): void {
        this.character = this.dataService.getSelectedCharacter();
        this.logic = new CharacterLogic(this.character);
    }
}