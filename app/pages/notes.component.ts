import { Component, OnInit, NgModule } from "@angular/core";
import { Character, DataService } from '../data/datasource';
import { ToolbarComponent, CharacterTab } from './toolbar.component';

@Component({
    selector: "notes",
    template: `<GridLayout rows="auto, *">
                <Toolbar [currentLocation]="currentTab" row="0"></Toolbar>
                <ScrollView row="1" class="form">
                <GridLayout columns="*" rows="auto, *, auto, *" class="input-field input-sides" style="height: 90%;">
                    <Label text="Notes" row="0" col="0" class="body"></Label>
                    <TextView [(ngModel)]="character.notes" row="1" col="0"></TextView>
                    <Label text="Journal" row="2" col="0" class="body"></Label>
                    <TextView [(ngModel)]="character.journal" row="3" col="0"></TextView>
                </GridLayout>
                </ScrollView>
                </GridLayout>`
})

export class NotesComponent {
    public constructor(private dataService: DataService) { }
    private character: Character;
    private currentTab: CharacterTab = CharacterTab.Notes;

    ngOnInit(): void {
        this.character = this.dataService.getSelectedCharacter();
    }
}