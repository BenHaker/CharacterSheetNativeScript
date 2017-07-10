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
        this.dataService.setSelectedCharacter(this.characters[args.index].id);
        this.router.navigate(["/character"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVybGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGFyYWN0ZXJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE4RDtBQUM5RCwwQ0FBeUM7QUFDekMsaURBQTREO0FBQzVELHlEQUF3RDtBQWtCeEQsSUFBYSxzQkFBc0I7SUFDL0IsZ0NBQW9CLE1BQWMsRUFBVSxXQUF3QjtRQUFwRSxpQkFBeUU7UUFBckQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBZTdELGtCQUFhLEdBQUc7WUFDbkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZELENBQUMsQ0FBQTtRQU9ELGlCQUFZLEdBQUc7WUFDWCxLQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2RCxDQUFDLENBQUE7SUEzQnVFLENBQUM7SUFLekUseUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSwrQkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELDRDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBTU0sMENBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBTUwsNkJBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDO0FBN0JZLHNCQUFzQjtJQWhCbEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsUUFBUSxFQUFFLDh6QkFXYztLQUN6QixDQUFDO3FDQUc4QixlQUFNLEVBQXVCLHdCQUFXO0dBRDNELHNCQUFzQixDQTZCbEM7QUE3Qlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXIsIERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YS9kYXRhc291cmNlJztcclxuaW1wb3J0IHsgQ2hhcmFjdGVyTG9naWMgfSBmcm9tICcuLi9kYXRhL2NoYXJhY3RlcmxvZ2ljJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2hhcmFjdGVyLWxpc3QnLFxyXG4gIHRlbXBsYXRlOiBgPEFjdGlvbkJhciB0aXRsZT1cIkJFQ01JIENoYXJhY3RlciBTaGVldFwiPjwvQWN0aW9uQmFyPlxyXG4gICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVwiKiwgYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPExpc3RWaWV3IHJvdz1cIjBcIiBbaXRlbXNdPVwiY2hhcmFjdGVyc1wiIChpdGVtVGFwKT1cIm9uSXRlbVRhcCgkZXZlbnQpXCIgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09J2l0ZW0uY2hhcmFjdGVyTmFtZScgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0taGVhZGluZ1wiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVwibG9naWMuZ2V0Q2xhc3NlcygpW2l0ZW0uY2xhc3NdICsgJyAoJyArIGl0ZW0ubGV2ZWwgKyAnKSdcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbS10ZXh0XCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Vmlldz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gcm93PVwiMVwiIHRleHQ9XCJOZXcgQ2hhcmFjdGVyXCIgKHRhcCk9XCJuZXdDaGFyYWN0ZXIoKVwiIGNsYXNzPVwiYnRuLXByaW1hcnlcIj48L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHsgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7IH1cclxuICAgIHByaXZhdGUgY2hhcmFjdGVyczogQ2hhcmFjdGVyW107XHJcbiAgICBwcml2YXRlIHN1YkNvZGU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgbG9naWM6IENoYXJhY3RlckxvZ2ljO1xyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3ViQ29kZSA9IHRoaXMuZGF0YVNlcnZpY2UuYWRkTG9hZGVkRXZlbnQodGhpcy5nZXRDaGFyYWN0ZXJzKTtcclxuICAgICAgICB0aGlzLmxvZ2ljID0gbmV3IENoYXJhY3RlckxvZ2ljKG51bGwpO1xyXG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2UubG9hZERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLnJlbW92ZUxvYWRlZEV2ZW50KHRoaXMuc3ViQ29kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENoYXJhY3RlcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzID0gdGhpcy5kYXRhU2VydmljZS5nZXRDaGFyYWN0ZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU2VydmljZS5zZXRTZWxlY3RlZENoYXJhY3Rlcih0aGlzLmNoYXJhY3RlcnNbYXJncy5pbmRleF0uaWQpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jaGFyYWN0ZXJcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0NoYXJhY3RlciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmFkZENoYXJhY3RlcigpO1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0Q2hhcmFjdGVycygpO1xyXG4gICAgfVxyXG59Il19