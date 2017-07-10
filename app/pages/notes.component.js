"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var datasource_1 = require("../data/datasource");
var toolbar_component_1 = require("./toolbar.component");
var NotesComponent = (function () {
    function NotesComponent(dataService) {
        this.dataService = dataService;
        this.currentTab = toolbar_component_1.CharacterTab.Notes;
    }
    NotesComponent.prototype.ngOnInit = function () {
        this.character = this.dataService.getSelectedCharacter();
    };
    return NotesComponent;
}());
NotesComponent = __decorate([
    core_1.Component({
        selector: "notes",
        template: "<GridLayout rows=\"auto, *\">\n                <Toolbar [currentLocation]=\"currentTab\" row=\"0\"></Toolbar>\n                <ScrollView row=\"1\" class=\"form\">\n                <GridLayout columns=\"*\" rows=\"auto, *, auto, *\" class=\"input-field input-sides\" style=\"height: 90%;\">\n                    <Label text=\"Notes\" row=\"0\" col=\"0\" class=\"body\"></Label>\n                    <TextView [(ngModel)]=\"character.notes\" row=\"1\" col=\"0\"></TextView>\n                    <Label text=\"Journal\" row=\"2\" col=\"0\" class=\"body\"></Label>\n                    <TextView [(ngModel)]=\"character.journal\" row=\"3\" col=\"0\"></TextView>\n                </GridLayout>\n                </ScrollView>\n                </GridLayout>"
    }),
    __metadata("design:paramtypes", [datasource_1.DataService])
], NotesComponent);
exports.NotesComponent = NotesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTREO0FBQzVELGlEQUE0RDtBQUM1RCx5REFBcUU7QUFpQnJFLElBQWEsY0FBYztJQUN2Qix3QkFBMkIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFM0MsZUFBVSxHQUFpQixnQ0FBWSxDQUFDLEtBQUssQ0FBQztJQUZDLENBQUM7SUFJeEQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzdELENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksY0FBYztJQWYxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE9BQU87UUFDakIsUUFBUSxFQUFFLGt2QkFVZ0I7S0FDN0IsQ0FBQztxQ0FHMEMsd0JBQVc7R0FEMUMsY0FBYyxDQVExQjtBQVJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ2hhcmFjdGVyLCBEYXRhU2VydmljZSB9IGZyb20gJy4uL2RhdGEvZGF0YXNvdXJjZSc7XHJcbmltcG9ydCB7IFRvb2xiYXJDb21wb25lbnQsIENoYXJhY3RlclRhYiB9IGZyb20gJy4vdG9vbGJhci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJub3Rlc1wiLFxyXG4gICAgdGVtcGxhdGU6IGA8R3JpZExheW91dCByb3dzPVwiYXV0bywgKlwiPlxyXG4gICAgICAgICAgICAgICAgPFRvb2xiYXIgW2N1cnJlbnRMb2NhdGlvbl09XCJjdXJyZW50VGFiXCIgcm93PVwiMFwiPjwvVG9vbGJhcj5cclxuICAgICAgICAgICAgICAgIDxTY3JvbGxWaWV3IHJvdz1cIjFcIiBjbGFzcz1cImZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIqXCIgcm93cz1cImF1dG8sICosIGF1dG8sICpcIiBjbGFzcz1cImlucHV0LWZpZWxkIGlucHV0LXNpZGVzXCIgc3R5bGU9XCJoZWlnaHQ6IDkwJTtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIk5vdGVzXCIgcm93PVwiMFwiIGNvbD1cIjBcIiBjbGFzcz1cImJvZHlcIj48L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0VmlldyBbKG5nTW9kZWwpXT1cImNoYXJhY3Rlci5ub3Rlc1wiIHJvdz1cIjFcIiBjb2w9XCIwXCI+PC9UZXh0Vmlldz5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkpvdXJuYWxcIiByb3c9XCIyXCIgY29sPVwiMFwiIGNsYXNzPVwiYm9keVwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRWaWV3IFsobmdNb2RlbCldPVwiY2hhcmFjdGVyLmpvdXJuYWxcIiByb3c9XCIzXCIgY29sPVwiMFwiPjwvVGV4dFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L1Njcm9sbFZpZXc+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+YFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGVzQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkgeyB9XHJcbiAgICBwcml2YXRlIGNoYXJhY3RlcjogQ2hhcmFjdGVyO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VGFiOiBDaGFyYWN0ZXJUYWIgPSBDaGFyYWN0ZXJUYWIuTm90ZXM7XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldFNlbGVjdGVkQ2hhcmFjdGVyKCk7XHJcbiAgICB9XHJcbn0iXX0=