import { Component, OnInit, NgModule } from "@angular/core";
import { Character, DataService } from '../data/datasource';
import { ToolbarComponent, CharacterTab } from './toolbar.component';

@Component({
    selector: "equipment",
    template: `<GridLayout rows="auto, *">
                <Toolbar [currentLocation]="currentTab" row="0"></Toolbar>
                <ScrollView row="1" class="form">
                <GridLayout columns="*" rows="auto, *, auto, *" class="input-field input-sides" style="height: 90%;">
                    <Label text="Regular Equipment" row="0" col="0" class="body"></Label>
                    <TextView [(ngModel)]="character.regularEquipment" row="1" col="0"></TextView>
                    <Label text="Magical Equipment" row="2" col="0" class="body"></Label>
                    <TextView [(ngModel)]="character.magicEquipment" row="3" col="0"></TextView>
                </GridLayout>
                </ScrollView>
                </GridLayout>`
})

export class EquipmentComponent {
    public constructor(private dataService: DataService) { }
    private character: Character;
    private currentTab: CharacterTab = CharacterTab.Equipment;

    ngOnInit(): void {
        this.character = this.dataService.getSelectedCharacter();
    }
}