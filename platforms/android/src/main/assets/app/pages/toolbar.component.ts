import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { confirm } from "ui/dialogs";
import { Character, DataService } from '../data/datasource';
import { TabView } from "ui/tab-view";

@Component({
    selector: "Toolbar",
    template: `<ActionBar [title]="character.characterName">
                    <ActionItem (tap)="back()" android.systemIcon="ic_menu_back" android.position="actionBar"></ActionItem>
                    <ActionItem (tap)="saveCharacter()" android.systemIcon="ic_menu_save" android.position="actionBar"></ActionItem>
                    <ActionItem (tap)="deleteCharacter()" android.systemIcon="ic_menu_delete" android.position="actionBar"></ActionItem>
                    <ActionItem (tap)="navigate(characterTab)" text="Character" android.position="popup" visibility="{{ currentLocation == characterTab ? 'collapse' : 'visible' }}"></ActionItem>
                    <ActionItem (tap)="navigate(attributesTab)" text="Attributes" android.position="popup" visibility="{{ currentLocation == attributesTab ? 'collapse' : 'visible' }}"></ActionItem>
                    <ActionItem (tap)="navigate(combatTab)" text="Combat" android.position="popup" visibility="{{ currentLocation == combatTab ? 'collapse' : 'visible' }}"></ActionItem>
                    <ActionItem (tap)="navigate(savesTab)" text="Saves" android.position="popup" visibility="{{ currentLocation == savesTab ? 'collapse' : 'visible' }}"></ActionItem>
                    <ActionItem (tap)="navigate(equipmentTab)" text="Equipment" android.position="popup" visibility="{{ currentLocation == equipmentTab ? 'collapse' : 'visible' }}"></ActionItem>
                    <ActionItem (tap)="navigate(treasureTab)" text="Treasure" android.position="popup" visibility="{{ currentLocation == treasureTab ? 'collapse' : 'visible' }}"></ActionItem>
                    <ActionItem (tap)="navigate(spellbookTab)" text="Spell Book" android.position="popup" visibility="{{ currentLocation == spellbookTab ? 'collapse' : 'visible' }}"></ActionItem>
                    <ActionItem (tap)="navigate(spellslotsTab)" text="Spell Slots" android.position="popup" visibility="{{ currentLocation == spellslotsTab ? 'collapse' : 'visible' }}"></ActionItem>
                    <ActionItem (tap)="navigate(abilitiesTab)" text="Abilities" android.position="popup" visibility="{{ currentLocation == abilitiesTab ? 'collapse' : 'visible' }}"></ActionItem>
                    <ActionItem (tap)="navigate(notesTab)" text="Notes & Journal" android.position="popup" visibility="{{ currentLocation == notesTab ? 'collapse' : 'visible' }}"></ActionItem>
                </ActionBar>
                <TabView class="tab-view" [selectedIndex]="currentLocation" (selectedIndexChange)="onIndexChanged($event)" selectedColor="#FF0000" iosIconRenderingMode="alwaysOriginal" sdkExampleTitle sdkToggleNavButton>
                    <StackLayout *tabItem="{title: 'Character'}" ></StackLayout>
                    <StackLayout *tabItem="{title: 'Attributes'}"></StackLayout>
                    <StackLayout *tabItem="{title: 'Combat'}"></StackLayout>
                    <StackLayout *tabItem="{title: 'Saves'}"></StackLayout>
                    <StackLayout *tabItem="{title: 'Equipment'}"></StackLayout>
                    <StackLayout *tabItem="{title: 'Treasure'}"></StackLayout>
                    <StackLayout *tabItem="{title: 'Spell Book'}"></StackLayout>
                    <StackLayout *tabItem="{title: 'Spell Slots'}"></StackLayout>
                    <StackLayout *tabItem="{title: 'Abilities'}"></StackLayout>
                    <StackLayout *tabItem="{title: 'Notes & Journal'}"></StackLayout>
                </TabView>`
})

export class ToolbarComponent {
    public constructor(private router: Router, private dataService: DataService) { }
    private character: Character;
    @Input() currentLocation: CharacterTab;
    private characterTab = CharacterTab.Character;
    private attributesTab = CharacterTab.Attributes;
    private combatTab = CharacterTab.Combat;
    private savesTab = CharacterTab.Saves;
    private equipmentTab = CharacterTab.Equipment;
    private treasureTab = CharacterTab.Treasure;
    private spellbookTab = CharacterTab.Spellbook;
    private spellslotsTab = CharacterTab.SpellSlots;
    private abilitiesTab = CharacterTab.Abilities;
    private notesTab = CharacterTab.Notes;

    ngOnInit(): void {
        this.character = this.dataService.getSelectedCharacter();
    }

    onIndexChanged(args) {
        let tmp = <TabView>args.object;
        this.navigate(<CharacterTab>tmp.selectedIndex);
    }

    saveCharacter = (): void => {
        this.dataService.saveData();
    }

    deleteCharacter = (): void => {
        let name: string = this.character.characterName;
        confirm("Are you sure you want to delete " + name  + ". Once deleted " + name + " will be lost. Continue?")
                .then(result => {
                    if(result == true)
                        this.dataService.deleteCharacter(this.character.id);
                });
    }

    back = () => {
        this.router.navigate([""]);
    }

    navigate = (moveTo: CharacterTab): void => {
        switch(moveTo) {
            case CharacterTab.Character:
                this.router.navigate(["character"]);
                break;
            case CharacterTab.Attributes:
                this.router.navigate(["attributes"]);
                break;
            case CharacterTab.Combat:
                this.router.navigate(["combat"]);
                break;
            case CharacterTab.Saves:
                this.router.navigate(["saves"]);
                break;
            case CharacterTab.Spellbook:
                this.router.navigate(["spellbook"]);
                break;
            case CharacterTab.SpellSlots:
                this.router.navigate(["spellslots"]);
                break;
            case CharacterTab.Notes:
                this.router.navigate(["notes"]);
                break;
            case CharacterTab.Equipment:
                this.router.navigate(["equipment"]);
                break;
            case CharacterTab.Treasure:
                this.router.navigate(["treasure"]);
                break;
            case CharacterTab.Abilities:
                this.router.navigate(["abilities"]);
                break;
        }
    }
}

export enum CharacterTab {
    Character,
    Attributes,
    Combat,
    Saves,
    Equipment,
    Treasure,
    Spellbook,
    SpellSlots,
    Abilities,
    Notes
}