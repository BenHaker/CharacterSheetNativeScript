import { Component, OnInit, NgModule } from "@angular/core";
import { Character, DataService, Weapon } from '../data/datasource';
import { CharacterLogic } from '../data/characterlogic';
import { ToolbarComponent, CharacterTab } from './toolbar.component';
import { alert, confirm } from "ui/dialogs";

@Component({
    selector: "combat",
    template: `<GridLayout rows="auto, auto, auto, *">
                <Toolbar [currentLocation]="currentTab" row="0"></Toolbar>
                <StackLayout class="form" row="1">
                    <GridLayout columns="auto, *, auto" rows="auto, auto" class="input-field input-sides">
                        <Label text="THAC0" row="0" col="0" class="body p-r-5"></Label>
                        <Label [text]="this.logic.getTHAC0()" row="0" col="1" class="body"></Label>
                        <Label [text]="'(' + this.logic.getAttackBonus() + ')'" row="0" col="2" class="body"></Label>
                        <Label text="AC" row="1" col="0" class="body"></Label>
                        <TextField [(ngModel)]="character.ac" row="1" col="1" keyboardType="number" (ngModelChange)="onAcChange($event)" class="input botton_border"></TextField>
                        <Label [text]="'(' + reverseAc + ')'" row="1" col="2" class="body"></Label>
                    </GridLayout>
                </StackLayout>
                <StackLayout class="form" row="2">
                    <GridLayout rows="auto, auto" columns="*, *, *, *, *" class="input-field input-sides">
                        <Label text="Weapon" row="0" col="0" class="body"></Label>
                        <Label text="Attack" row="0" col="1" class="body"></Label>
                        <Label text="Damage" row="0" col="2" class="body"></Label>
                        <Label text="Range" row="0" col="3" class="body"></Label>
                        <TextField [(ngModel)]="weaponName" row="1" col="0" class="input botton_border" style="margin-right:10px;"></TextField>
                        <TextField [(ngModel)]="weaponAttack" row="1" col="1" class="input botton_border" style="margin-right:10px;"></TextField>
                        <TextField [(ngModel)]="weaponDamage" row="1" col="2" class="input botton_border" style="margin-right:10px;"></TextField>
                        <TextField [(ngModel)]="weaponRange" row="1" col="3" class="input botton_border"></TextField>
                        <Button text="Add" (tap)="addWeapon()" row="1" col="4" class="btn-primary btn-form"></Button>
                    </GridLayout>
                </StackLayout>
                <StackLayout row="3" class="form">
                    <ListView [items]="character.weapons" class="input-field input-sides">
                        <ng-template let-item="item" let-i="index">
                            <GridLayout columns="*, *, *, *, *">
                                <Label [text]="[item.name]" col="0" class="body"></Label>
                                <Label [text]="[item.attack]" col="1" class="body"></Label>
                                <Label [text]="[item.damage]" col="2" class="body"></Label>
                                <Label [text]="item.range" col="3" class="body"></Label>
                                <Button text="Delete" (tap)="deleteWeapon(i)" col="4" class="btn-primary btn-form" textWrap="true"></Button>
                            </GridLayout>
                        </ng-template>
                    </ListView>
                </StackLayout>
                </GridLayout>`
})

export class CombatComponent {
    public constructor(private dataService: DataService) { }
    private character: Character;
    private logic: CharacterLogic;
    private reverseAc: number;
    private weaponName: string;
    private weaponAttack: string;
    private weaponDamage: string;
    private weaponRange: string;
    private currentTab: CharacterTab = CharacterTab.Combat;

    ngOnInit(): void {
        this.character = this.dataService.getSelectedCharacter();
        this.logic = new CharacterLogic(this.character);
        this.reverseAc = this.logic.getReverseAC();
    }

    onAcChange = (arg) => {
        this.reverseAc = this.logic.getReverseAC();
    }

    addWeapon = () => {
        if(this.weaponName == null || this.weaponName == "") {
            alert("Cannot insert a weapon without a name");
            return;
        }
        if(this.weaponAttack == null || this.weaponAttack == "") {
            alert("Cannot insert a weapon without attack butons");
            return;
        }
        if(this.weaponDamage == null || this.weaponDamage == "") {
            alert("Cannot insert a weapon without damage");
            return;
        }
        let weapon = new Weapon();
        weapon.name = this.weaponName;
        weapon.attack = this.weaponAttack;
        weapon.damage = this.weaponDamage;
        weapon.range = this.weaponRange;
        if(this.character.weapons == null)
            this.character.weapons = new Array<Weapon>();
        this.character.weapons.push(weapon);
    }

    deleteWeapon = (index) => {
        let name = this.character.weapons[index].name;
        confirm("Are you sure you want to delete " + name  + ". Once deleted " + name + " will be lost. Continue?")
                .then(result => {
                    if(result == true)
                        this.character.weapons.splice(index, 1);
                });
    }
}