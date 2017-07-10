import { Component, OnInit, NgModule } from "@angular/core";
import { Character, DataService } from '../data/datasource';
import { CharacterLogic } from '../data/characterlogic';
import { ToolbarComponent, CharacterTab } from './toolbar.component';

@Component({
    selector: "attributes",
    template: `<GridLayout rows="auto, *">
                <Toolbar [currentLocation]="currentTab" row="0"></Toolbar>
                <StackLayout class="form" row="1">
                <GridLayout columns="auto, *, auto" rows="auto, auto, auto, auto, auto, auto" class="input-field input-sides">
                    <Label text="Strength" row="0" col="0" class="body"></Label>
                    <TextField [(ngModel)]="character.strength" row="0" col="1" keyboardType="number" (ngModelChange)="onAttrChange($event, 'strength')" class="input botton_border"></TextField>
                    <Label [text]="'(' + (strMod > 0 ? '+' : '') + strMod + ')'" row="0" col="2" class="body"></Label>
                    <Label text="Dexterity" row="1" col="0" class="body"></Label>
                    <TextField [(ngModel)]="character.dexterity" row="1" col="1" keyboardType="number" (ngModelChange)="onAttrChange($event, 'dexterity')" class="input botton_border"></TextField>
                    <Label [text]="'(' + (dexMod > 0 ? '+' : '') + dexMod + ')'" row="1" col="2" class="body"></Label>
                    <Label text="Constitution" row="2" col="0" class="body p-r-5"></Label>
                    <TextField [(ngModel)]="character.constitution" row="2" col="1" keyboardType="number" (ngModelChange)="onAttrChange($event, 'constitution')" class="input botton_border"></TextField>
                    <Label [text]="'(' + (conMod > 0 ? '+' : '') + conMod + ')'" row="2" col="2" class="body"></Label>
                    <Label text="Intelligence" row="3" col="0" class="body"></Label>
                    <TextField [(ngModel)]="character.intelligence" row="3" col="1" keyboardType="number" (ngModelChange)="onAttrChange($event, 'intelligence')" class="input botton_border"></TextField>
                    <Label [text]="'(' + (intMod > 0 ? '+' : '') + intMod + ')'" row="3" col="2" class="body"></Label>
                    <Label text="Wisdom" row="4" col="0" class="body"></Label>
                    <TextField [(ngModel)]="character.wisdom" row="4" col="1" keyboardType="number" (ngModelChange)="onAttrChange($event, 'wisdom')" class="input botton_border"></TextField>
                    <Label [text]="'(' + (wisMod > 0 ? '+' : '') + wisMod + ')'" row="4" col="2" class="body"></Label>
                    <Label text="Charisma" row="5" col="0" class="body"></Label>
                    <TextField [(ngModel)]="character.charisma" row="5" col="1" keyboardType="number" (ngModelChange)="onAttrChange($event, 'charisma')" class="input botton_border"></TextField>
                    <Label [text]="'(' + (chaMod > 0 ? '+' : '') + chaMod + ')'" row="5" col="2" class="body"></Label>
                </GridLayout>
                </StackLayout>
                </GridLayout>`
})

export class AttributesComponent {
    public constructor(private dataService: DataService) { }
    private character: Character;
    private logic: CharacterLogic;
    private currentTab = CharacterTab.Attributes;
    private strMod = 0;
    private dexMod = 0;
    private conMod = 0;
    private intMod = 0;
    private wisMod = 0;
    private chaMod = 0;

    ngOnInit(): void {
        this.character = this.dataService.getSelectedCharacter();
        this.logic = new CharacterLogic(this.character);
        this.strMod = this.logic.getAttributeModifier("strength");
        this.dexMod = this.logic.getAttributeModifier("dexterity");
        this.conMod = this.logic.getAttributeModifier("constitution");
        this.intMod = this.logic.getAttributeModifier("intelligence");
        this.wisMod = this.logic.getAttributeModifier("wisdom");
        this.chaMod = this.logic.getAttributeModifier("charisma");
    }

    onAttrChange = (event, attr: string) => {
        let mod: number = this.logic.getAttributeModifier(attr);
        switch(attr) {
            case "strength":
               this.strMod = mod;
               break;
            case "dexterity":
               this.dexMod = mod;
               break;
            case "constitution":
               this.conMod = mod;
               break;
            case "intelligence":
               this.intMod = mod;
               break;
            case "wisdom":
               this.wisMod = mod;
               break;
            case "charisma":
               this.chaMod = mod;
               break;
        }
    }
}