"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var datasource_1 = require("../data/datasource");
var characterlogic_1 = require("../data/characterlogic");
var toolbar_component_1 = require("./toolbar.component");
var AbilitiesComponent = (function () {
    function AbilitiesComponent(dataService) {
        this.dataService = dataService;
        this.currentTab = toolbar_component_1.CharacterTab.Abilities;
    }
    AbilitiesComponent.prototype.ngOnInit = function () {
        this.character = this.dataService.getSelectedCharacter();
        this.logic = new characterlogic_1.CharacterLogic(this.character);
        this.abilities = this.logic.getAbilities();
    };
    return AbilitiesComponent;
}());
AbilitiesComponent = __decorate([
    core_1.Component({
        selector: "abilities",
        template: "<GridLayout rows=\"auto, *\">\n                <Toolbar [currentLocation]=\"currentTab\" row=\"0\"></Toolbar>\n                <ListView row=\"1\" [items]=\"abilities\" class=\"list-group\">\n                    <ng-template let-item=\"item\">\n                        <StackLayout class=\"list-group-item\">\n                            <Label [text]='item.title' class=\"list-group-item-heading\"></Label>\n                            <Label [text]=\"item.text\" style=\"white-space:normal\" class=\"list-group-item-text\"></Label>\n                        </StackLayout>\n                    </ng-template>\n                </ListView>\n                </GridLayout>"
    }),
    __metadata("design:paramtypes", [datasource_1.DataService])
], AbilitiesComponent);
exports.AbilitiesComponent = AbilitiesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJpbGl0aWVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFiaWxpdGllcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEQ7QUFDNUQsaURBQTREO0FBRTVELHlEQUF3RDtBQUN4RCx5REFBcUU7QUFpQnJFLElBQWEsa0JBQWtCO0lBQzNCLDRCQUEyQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUczQyxlQUFVLEdBQUcsZ0NBQVksQ0FBQyxTQUFTLENBQUM7SUFIVyxDQUFDO0lBTXhELHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksK0JBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQzlDLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksa0JBQWtCO0lBZjlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixRQUFRLEVBQUUsK3BCQVVnQjtLQUM3QixDQUFDO3FDQUcwQyx3QkFBVztHQUQxQyxrQkFBa0IsQ0FZOUI7QUFaWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXIsIERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YS9kYXRhc291cmNlJztcclxuaW1wb3J0IHsgQWJpbGl0eSB9IGZyb20gJy4uL2RhdGEvbWV0YWRhdGFzb3VyY2UnO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXJMb2dpYyB9IGZyb20gJy4uL2RhdGEvY2hhcmFjdGVybG9naWMnO1xyXG5pbXBvcnQgeyBUb29sYmFyQ29tcG9uZW50LCBDaGFyYWN0ZXJUYWIgfSBmcm9tICcuL3Rvb2xiYXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYWJpbGl0aWVzXCIsXHJcbiAgICB0ZW1wbGF0ZTogYDxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvLCAqXCI+XHJcbiAgICAgICAgICAgICAgICA8VG9vbGJhciBbY3VycmVudExvY2F0aW9uXT1cImN1cnJlbnRUYWJcIiByb3c9XCIwXCI+PC9Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgPExpc3RWaWV3IHJvdz1cIjFcIiBbaXRlbXNdPVwiYWJpbGl0aWVzXCIgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1pdGVtPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09J2l0ZW0udGl0bGUnIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtLWhlYWRpbmdcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cIml0ZW0udGV4dFwiIHN0eWxlPVwid2hpdGUtc3BhY2U6bm9ybWFsXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0tdGV4dFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+YFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFiaWxpdGllc0NvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHsgfVxyXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXI6IENoYXJhY3RlcjtcclxuICAgIHByaXZhdGUgbG9naWM6IENoYXJhY3RlckxvZ2ljO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VGFiID0gQ2hhcmFjdGVyVGFiLkFiaWxpdGllcztcclxuICAgIHByaXZhdGUgYWJpbGl0aWVzOiBBYmlsaXR5W107XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldFNlbGVjdGVkQ2hhcmFjdGVyKCk7XHJcbiAgICAgICAgdGhpcy5sb2dpYyA9IG5ldyBDaGFyYWN0ZXJMb2dpYyh0aGlzLmNoYXJhY3Rlcik7XHJcbiAgICAgICAgdGhpcy5hYmlsaXRpZXMgPSB0aGlzLmxvZ2ljLmdldEFiaWxpdGllcygpXHJcbiAgICB9XHJcbn0iXX0=