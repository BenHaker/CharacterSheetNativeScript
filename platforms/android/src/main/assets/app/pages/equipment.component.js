"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var datasource_1 = require("../data/datasource");
var toolbar_component_1 = require("./toolbar.component");
var EquipmentComponent = (function () {
    function EquipmentComponent(dataService) {
        this.dataService = dataService;
        this.currentTab = toolbar_component_1.CharacterTab.Equipment;
    }
    EquipmentComponent.prototype.ngOnInit = function () {
        this.character = this.dataService.getSelectedCharacter();
    };
    return EquipmentComponent;
}());
EquipmentComponent = __decorate([
    core_1.Component({
        selector: "equipment",
        template: "<GridLayout rows=\"auto, *\">\n                <Toolbar [currentLocation]=\"currentTab\" row=\"0\"></Toolbar>\n                <ScrollView row=\"1\" class=\"form\">\n                <GridLayout columns=\"*\" rows=\"auto, *, auto, *\" class=\"input-field input-sides\" style=\"height: 90%;\">\n                    <Label text=\"Regular Equipment\" row=\"0\" col=\"0\" class=\"body\"></Label>\n                    <TextView [(ngModel)]=\"character.regularEquipment\" row=\"1\" col=\"0\"></TextView>\n                    <Label text=\"Magical Equipment\" row=\"2\" col=\"0\" class=\"body\"></Label>\n                    <TextView [(ngModel)]=\"character.magicEquipment\" row=\"3\" col=\"0\"></TextView>\n                </GridLayout>\n                </ScrollView>\n                </GridLayout>"
    }),
    __metadata("design:paramtypes", [datasource_1.DataService])
], EquipmentComponent);
exports.EquipmentComponent = EquipmentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVxdWlwbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEQ7QUFDNUQsaURBQTREO0FBQzVELHlEQUFxRTtBQWlCckUsSUFBYSxrQkFBa0I7SUFDM0IsNEJBQTJCLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRTNDLGVBQVUsR0FBaUIsZ0NBQVksQ0FBQyxTQUFTLENBQUM7SUFGSCxDQUFDO0lBSXhELHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLGtCQUFrQjtJQWY5QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFLDB4QkFVZ0I7S0FDN0IsQ0FBQztxQ0FHMEMsd0JBQVc7R0FEMUMsa0JBQWtCLENBUTlCO0FBUlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ2hhcmFjdGVyLCBEYXRhU2VydmljZSB9IGZyb20gJy4uL2RhdGEvZGF0YXNvdXJjZSc7XHJcbmltcG9ydCB7IFRvb2xiYXJDb21wb25lbnQsIENoYXJhY3RlclRhYiB9IGZyb20gJy4vdG9vbGJhci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJlcXVpcG1lbnRcIixcclxuICAgIHRlbXBsYXRlOiBgPEdyaWRMYXlvdXQgcm93cz1cImF1dG8sICpcIj5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyIFtjdXJyZW50TG9jYXRpb25dPVwiY3VycmVudFRhYlwiIHJvdz1cIjBcIj48L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICA8U2Nyb2xsVmlldyByb3c9XCIxXCIgY2xhc3M9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiKlwiIHJvd3M9XCJhdXRvLCAqLCBhdXRvLCAqXCIgY2xhc3M9XCJpbnB1dC1maWVsZCBpbnB1dC1zaWRlc1wiIHN0eWxlPVwiaGVpZ2h0OiA5MCU7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJSZWd1bGFyIEVxdWlwbWVudFwiIHJvdz1cIjBcIiBjb2w9XCIwXCIgY2xhc3M9XCJib2R5XCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dFZpZXcgWyhuZ01vZGVsKV09XCJjaGFyYWN0ZXIucmVndWxhckVxdWlwbWVudFwiIHJvdz1cIjFcIiBjb2w9XCIwXCI+PC9UZXh0Vmlldz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIk1hZ2ljYWwgRXF1aXBtZW50XCIgcm93PVwiMlwiIGNvbD1cIjBcIiBjbGFzcz1cImJvZHlcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0VmlldyBbKG5nTW9kZWwpXT1cImNoYXJhY3Rlci5tYWdpY0VxdWlwbWVudFwiIHJvdz1cIjNcIiBjb2w9XCIwXCI+PC9UZXh0Vmlldz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cclxuICAgICAgICAgICAgICAgIDwvU2Nyb2xsVmlldz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRXF1aXBtZW50Q29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkgeyB9XHJcbiAgICBwcml2YXRlIGNoYXJhY3RlcjogQ2hhcmFjdGVyO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VGFiOiBDaGFyYWN0ZXJUYWIgPSBDaGFyYWN0ZXJUYWIuRXF1aXBtZW50O1xyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gdGhpcy5kYXRhU2VydmljZS5nZXRTZWxlY3RlZENoYXJhY3RlcigpO1xyXG4gICAgfVxyXG59Il19