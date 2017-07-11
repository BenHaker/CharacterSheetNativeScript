import { Component, OnInit, NgModule } from "@angular/core";
import { Character, DataService } from '../data/datasource';
import { ToolbarComponent, CharacterTab } from './toolbar.component';

@Component({
    selector: "treasure",
    template: `<GridLayout rows="auto, *">
                <Toolbar [currentLocation]="currentTab" row="0"></Toolbar>
                <StackLayout class="form" row="1">
                    <GridLayout columns="auto, *" rows="auto, auto, auto, auto, auto, *" class="input-field input-sides">
                        <Label text="PP" row="0" col="0" class="body"></Label>
                        <TextField [(ngModel)]="this.character.treasure.pp" row="0" col="1" keyboardType="number" class="input botton_border"></TextField>
                        <Label text="GP" row="1" col="0" class="body"></Label>
                        <TextField [(ngModel)]="this.character.treasure.gp" row="1" col="1" keyboardType="number" class="input botton_border"></TextField>
                        <Label text="EP" row="2" col="0" class="body"></Label>
                        <TextField [(ngModel)]="this.character.treasure.ep" row="2" col="1" keyboardType="number" class="input botton_border"></TextField>
                        <Label text="SP" row="3" col="0" class="body"></Label>
                        <TextField [(ngModel)]="this.character.treasure.sp" row="3" col="1" keyboardType="number" class="input botton_border"></TextField>
                        <Label text="CP" row="4" col="0" class="body"></Label>
                        <TextField [(ngModel)]="this.character.treasure.cp" row="4" col="1" keyboardType="number" class="input botton_border"></TextField>
                        <Label text="Items" row="5" col="0" class="body p-r-5"></Label>
                        <TextView [(ngModel)]="this.character.treasure.items" row="5" col="1" class="input botton_border"></TextView>
                    </GridLayout>
                </StackLayout>
                </GridLayout>`
})

export class TreasureComponent {
    public constructor(private dataService: DataService) { }
    private character: Character;
    private currentTab: CharacterTab = CharacterTab.Treasure;

    ngOnInit(): void {
        this.character = this.dataService.getSelectedCharacter();
    }
}