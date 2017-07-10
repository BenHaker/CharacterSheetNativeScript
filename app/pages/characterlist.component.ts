import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Router } from "@angular/router";
import { Character, DataService } from '../data/datasource';
import { CharacterLogic } from '../data/characterlogic';

@Component({
  selector: 'character-list',
  template: `<ActionBar title="BECMI Character Sheet"></ActionBar>
            <GridLayout rows="*, auto">
                <ListView row="0" [items]="characters" (itemTap)="onItemTap($event)" class="list-group">
                    <ng-template let-item="item">
                        <StackLayout class="list-group-item">
                            <Label [text]='item.characterName' class="list-group-item-heading"></Label>
                            <Label [text]="logic.getClasses()[item.class] + ' (' + item.level + ')'" class="list-group-item-text"></Label>
                        </StackLayout>
                    </ng-template>
                </ListView>
                <Button row="1" text="New Character" (tap)="newCharacter()" class="btn-primary"></Button>
            </GridLayout>`
})

export class CharacterListComponent implements OnInit {   
    constructor(private router: Router, private dataService: DataService) { }
    private characters: Character[];
    private subCode: number;
    private logic: CharacterLogic;

    ngOnInit(): void {
        this.subCode = this.dataService.addLoadedEvent(this.getCharacters);
        this.logic = new CharacterLogic(null);
        this.dataService.loadData();
    }

    ngOnDestroy(): void {
        this.dataService.removeLoadedEvent(this.subCode);
    }

    public getCharacters = () => {
        this.characters = this.dataService.getCharacters();
    }

    public onItemTap(args) {
        this.dataService.setSelectedCharacter(this.characters[args.index].id);
        this.router.navigate(["/character"]);
    }

    newCharacter = () => {
        this.dataService.addCharacter();
        this.characters = this.dataService.getCharacters();
    }
}