"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var datasource_1 = require("../data/datasource");
var characterlogic_1 = require("../data/characterlogic");
var CharacterListComponent = (function () {
    function CharacterListComponent(router, dataService) {
        var _this = this;
        this.router = router;
        this.dataService = dataService;
        this.getCharacters = function () {
            _this.characters = _this.dataService.getCharacters();
        };
        this.newCharacter = function () {
            _this.dataService.addCharacter();
            _this.characters = _this.dataService.getCharacters();
            _this.selectCharacter(_this.characters.length - 1);
        };
        this.selectCharacter = function (index) {
            _this.dataService.setSelectedCharacter(_this.characters[index].id);
            _this.router.navigate(["/character"]);
        };
    }
    CharacterListComponent.prototype.ngOnInit = function () {
        this.subCode = this.dataService.addLoadedEvent(this.getCharacters);
        this.logic = new characterlogic_1.CharacterLogic(null);
        this.dataService.loadData();
    };
    CharacterListComponent.prototype.ngOnDestroy = function () {
        this.dataService.removeLoadedEvent(this.subCode);
    };
    CharacterListComponent.prototype.onItemTap = function (args) {
        this.selectCharacter(args.index);
    };
    return CharacterListComponent;
}());
CharacterListComponent = __decorate([
    core_1.Component({
        selector: 'character-list',
        template: "<ActionBar title=\"BECMI Character Sheet\"></ActionBar>\n            <GridLayout rows=\"*, auto\">\n                <ListView row=\"0\" [items]=\"characters\" (itemTap)=\"onItemTap($event)\" class=\"list-group\">\n                    <ng-template let-item=\"item\">\n                        <StackLayout class=\"list-group-item\">\n                            <Label [text]='item.characterName' class=\"list-group-item-heading\"></Label>\n                            <Label [text]=\"logic.getClasses()[item.class] + ' (' + item.level + ')'\" class=\"list-group-item-text\"></Label>\n                        </StackLayout>\n                    </ng-template>\n                </ListView>\n                <Button row=\"1\" text=\"New Character\" (tap)=\"newCharacter()\" class=\"btn-primary\"></Button>\n            </GridLayout>"
    }),
    __metadata("design:paramtypes", [router_1.Router, datasource_1.DataService])
], CharacterListComponent);
exports.CharacterListComponent = CharacterListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVybGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGFyYWN0ZXJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE4RDtBQUM5RCwwQ0FBeUM7QUFDekMsaURBQTREO0FBQzVELHlEQUF3RDtBQWtCeEQsSUFBYSxzQkFBc0I7SUFDL0IsZ0NBQW9CLE1BQWMsRUFBVSxXQUF3QjtRQUFwRSxpQkFBeUU7UUFBckQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBZTdELGtCQUFhLEdBQUc7WUFDbkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZELENBQUMsQ0FBQTtRQU1ELGlCQUFZLEdBQUc7WUFDWCxLQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNuRCxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQTtRQUVELG9CQUFlLEdBQUcsVUFBQyxLQUFhO1lBQzVCLEtBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqRSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFBO0lBaEN1RSxDQUFDO0lBS3pFLHlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksK0JBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCw0Q0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQU1NLDBDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQVlMLDZCQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQztBQWxDWSxzQkFBc0I7SUFoQmxDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFFBQVEsRUFBRSw4ekJBV2M7S0FDekIsQ0FBQztxQ0FHOEIsZUFBTSxFQUF1Qix3QkFBVztHQUQzRCxzQkFBc0IsQ0FrQ2xDO0FBbENZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ2hhcmFjdGVyLCBEYXRhU2VydmljZSB9IGZyb20gJy4uL2RhdGEvZGF0YXNvdXJjZSc7XHJcbmltcG9ydCB7IENoYXJhY3RlckxvZ2ljIH0gZnJvbSAnLi4vZGF0YS9jaGFyYWN0ZXJsb2dpYyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NoYXJhY3Rlci1saXN0JyxcclxuICB0ZW1wbGF0ZTogYDxBY3Rpb25CYXIgdGl0bGU9XCJCRUNNSSBDaGFyYWN0ZXIgU2hlZXRcIj48L0FjdGlvbkJhcj5cclxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cIiosIGF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxMaXN0VmlldyByb3c9XCIwXCIgW2l0ZW1zXT1cImNoYXJhY3RlcnNcIiAoaXRlbVRhcCk9XCJvbkl0ZW1UYXAoJGV2ZW50KVwiIGNsYXNzPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPSdpdGVtLmNoYXJhY3Rlck5hbWUnIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtLWhlYWRpbmdcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cImxvZ2ljLmdldENsYXNzZXMoKVtpdGVtLmNsYXNzXSArICcgKCcgKyBpdGVtLmxldmVsICsgJyknXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0tdGV4dFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cIjFcIiB0ZXh0PVwiTmV3IENoYXJhY3RlclwiICh0YXApPVwibmV3Q2hhcmFjdGVyKClcIiBjbGFzcz1cImJ0bi1wcmltYXJ5XCI+PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7ICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkgeyB9XHJcbiAgICBwcml2YXRlIGNoYXJhY3RlcnM6IENoYXJhY3RlcltdO1xyXG4gICAgcHJpdmF0ZSBzdWJDb2RlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGxvZ2ljOiBDaGFyYWN0ZXJMb2dpYztcclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN1YkNvZGUgPSB0aGlzLmRhdGFTZXJ2aWNlLmFkZExvYWRlZEV2ZW50KHRoaXMuZ2V0Q2hhcmFjdGVycyk7XHJcbiAgICAgICAgdGhpcy5sb2dpYyA9IG5ldyBDaGFyYWN0ZXJMb2dpYyhudWxsKTtcclxuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmxvYWREYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhU2VydmljZS5yZW1vdmVMb2FkZWRFdmVudCh0aGlzLnN1YkNvZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDaGFyYWN0ZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0Q2hhcmFjdGVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Q2hhcmFjdGVyKGFyZ3MuaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0NoYXJhY3RlciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmFkZENoYXJhY3RlcigpO1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0Q2hhcmFjdGVycygpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Q2hhcmFjdGVyKHRoaXMuY2hhcmFjdGVycy5sZW5ndGggLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RDaGFyYWN0ZXIgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2Uuc2V0U2VsZWN0ZWRDaGFyYWN0ZXIodGhpcy5jaGFyYWN0ZXJzW2luZGV4XS5pZCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NoYXJhY3RlclwiXSk7XHJcbiAgICB9XHJcbn0iXX0=