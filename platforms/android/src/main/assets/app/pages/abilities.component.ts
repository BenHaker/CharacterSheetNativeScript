import { Component, OnInit, NgModule } from "@angular/core";
import { Character, DataService } from '../data/datasource';
import { Ability } from '../data/metadatasource';
import { CharacterLogic } from '../data/characterlogic';
import { ToolbarComponent, CharacterTab } from './toolbar.component';

@Component({
    selector: "abilities",
    template: `<GridLayout rows="auto, *">
                <Toolbar [currentLocation]="currentTab" row="0"></Toolbar>
                <ListView row="1" [items]="abilities" class="list-group">
                    <ng-template let-item="item">
                        <StackLayout class="list-group-item">
                            <Label [text]='item.title' class="list-group-item-heading"></Label>
                            <Label [text]="item.text" style="white-space:normal" class="list-group-item-text"></Label>
                        </StackLayout>
                    </ng-template>
                </ListView>
                </GridLayout>`
})

export class AbilitiesComponent {
    public constructor(private dataService: DataService) { }
    private character: Character;
    private logic: CharacterLogic;
    private currentTab = CharacterTab.Abilities;
    private abilities: Ability[];

    ngOnInit(): void {
        this.character = this.dataService.getSelectedCharacter();
        this.logic = new CharacterLogic(this.character);
        this.abilities = this.logic.getAbilities()
    }
}