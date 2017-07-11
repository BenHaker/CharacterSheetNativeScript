"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var file_system_1 = require("file-system");
var DataService = (function () {
    function DataService() {
        var _this = this;
        this.wasLoaded = false;
        this.folderName = "characters-data";
        this.fileName = "characters.json";
        this.loadedFunctions = [];
        this.subCode = 0;
        this.addLoadedEvent = function (callback) {
            _this.loadedFunctions[_this.subCode] = callback;
            ++_this.subCode;
            return _this.subCode;
        };
        this.removeLoadedEvent = function (subCode) {
            delete _this.loadedFunctions[subCode];
        };
        this.loadData = function () {
            var folder = file_system_1.knownFolders.documents().getFolder(_this.folderName);
            var file = folder.getFile(_this.fileName);
            file.readText()
                .then(function (data) {
                if (data != null && data != "")
                    _this.characters = JSON.parse(data);
                else
                    _this.characters = new Array();
                _this.wasLoaded = true;
                _this.loadedFunctions.forEach(function (callback) { return callback(); });
            })
                .catch(function (err) { return console.log(err); });
        };
        this.saveData = function () {
            var folder = file_system_1.knownFolders.documents().getFolder(_this.folderName);
            var file = folder.getFile(_this.fileName);
            file.writeText(JSON.stringify(_this.characters));
        };
        this.setSelectedCharacter = function (id) {
            _this.selectedId = id;
        };
        this.getSelectedCharacter = function () {
            var character = _this.characters.filter((function (character) { return character.id == _this.selectedId; }), _this.selectedId)[0];
            _this.validateCharacter(character);
            return character;
        };
        this.findNextId = function () {
            var tmp = _this.characters.sort(function (a, b) { return a.id - b.id; });
            if (tmp == null || tmp.length == 0)
                return 1;
            return tmp[tmp.length - 1].id + 1;
        };
        this.getCharacters = function () {
            if (_this.wasLoaded == false)
                _this.loadData();
            return _this.characters;
        };
        this.getCharacter = function (id) {
            var character = _this.characters.find(function (character) { return character.id == id; });
            _this.validateCharacter(character);
            return character;
        };
        this.validateCharacter = function (character) {
            if (character != null) {
                if (character.treasure == null)
                    character.treasure = new Treasure();
            }
        };
        this.addCharacter = function () {
            _this.characters[_this.characters.length] = new Character(_this.findNextId());
            _this.saveData();
        };
        this.deleteCharacter = function (id) {
            var index = _this.characters.findIndex(function (character) { return character.id == id; });
            _this.characters.splice(index, 1);
        };
    }
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable()
], DataService);
exports.DataService = DataService;
var Character = (function () {
    function Character(id) {
        this.id = id;
        this.playerName = "New Player";
        this.characterName = "New Character";
        this.level = 1;
        this.xp = 0;
        this.strength = 3;
        this.dexterity = 3;
        this.constitution = 3;
        this.intelligence = 3;
        this.wisdom = 3;
        this.charisma = 3;
        this.ac = 9;
        this.weapons = new Array();
        this.treasure = new Treasure();
    }
    return Character;
}());
exports.Character = Character;
var Treasure = (function () {
    function Treasure() {
    }
    return Treasure;
}());
exports.Treasure = Treasure;
var Weapon = (function () {
    function Weapon() {
    }
    return Weapon;
}());
exports.Weapon = Weapon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGFzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsMkNBQXlEO0FBSXpELElBQWEsV0FBVztJQUR4QjtRQUFBLGlCQXlGQztRQXJGVyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBVyxpQkFBaUIsQ0FBQztRQUN2QyxhQUFRLEdBQVcsaUJBQWlCLENBQUM7UUFDckMsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUVwQixtQkFBYyxHQUFHLFVBQUMsUUFBUTtZQUN0QixLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUM7WUFDOUMsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2YsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQyxDQUFBO1FBRUQsc0JBQWlCLEdBQUcsVUFBQyxPQUFPO1lBQ3hCLE9BQU8sS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUE7UUFFRCxhQUFRLEdBQUc7WUFDUCxJQUFJLE1BQU0sR0FBRywwQkFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakUsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFekMsSUFBSSxDQUFDLFFBQVEsRUFBRTtpQkFDVixJQUFJLENBQUMsVUFBQSxJQUFJO2dCQUNOLEVBQUUsQ0FBQSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDMUIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2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O1FBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBd0NMLGdCQUFDO0FBQUQsQ0FBQyxBQXhERCxJQXdEQztBQXhEWSw4QkFBUztBQTBEdEI7SUFBQTtJQU9BLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSw0QkFBUTtBQVNyQjtJQUFBO0lBS0EsQ0FBQztJQUFELGFBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUxZLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBrbm93bkZvbGRlcnMsIEZpbGUsIEZvbGRlciB9IGZyb20gXCJmaWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgeyBDbGFzcyB9IGZyb20gJy4vbWV0YWRhdGFzb3VyY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBjaGFyYWN0ZXJzOiBDaGFyYWN0ZXJbXTtcclxuICAgIHByaXZhdGUgc2VsZWN0ZWRJZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB3YXNMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZm9sZGVyTmFtZTogc3RyaW5nID0gXCJjaGFyYWN0ZXJzLWRhdGFcIjtcclxuICAgIHByaXZhdGUgZmlsZU5hbWU6IHN0cmluZyA9IFwiY2hhcmFjdGVycy5qc29uXCI7XHJcbiAgICBwcml2YXRlIGxvYWRlZEZ1bmN0aW9ucyA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzdWJDb2RlID0gMDtcclxuXHJcbiAgICBhZGRMb2FkZWRFdmVudCA9IChjYWxsYmFjaykgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGVkRnVuY3Rpb25zW3RoaXMuc3ViQ29kZV0gPSBjYWxsYmFjaztcclxuICAgICAgICArK3RoaXMuc3ViQ29kZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdWJDb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxvYWRlZEV2ZW50ID0gKHN1YkNvZGUpID0+IHtcclxuICAgICAgICBkZWxldGUgdGhpcy5sb2FkZWRGdW5jdGlvbnNbc3ViQ29kZV07XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGZvbGRlciA9IGtub3duRm9sZGVycy5kb2N1bWVudHMoKS5nZXRGb2xkZXIodGhpcy5mb2xkZXJOYW1lKTtcclxuICAgICAgICBsZXQgZmlsZSA9IGZvbGRlci5nZXRGaWxlKHRoaXMuZmlsZU5hbWUpO1xyXG5cclxuICAgICAgICBmaWxlLnJlYWRUZXh0KClcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgaWYoZGF0YSAhPSBudWxsICYmIGRhdGEgIT0gXCJcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnMgPSBKU09OLnBhcnNlKGRhdGEpOyBcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlcnMgPSBuZXcgQXJyYXk8Q2hhcmFjdGVyPigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YXNMb2FkZWQgPSB0cnVlOyBcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkRnVuY3Rpb25zLmZvckVhY2goKGNhbGxiYWNrKSA9PiBjYWxsYmFjaygpKX0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZURhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGZvbGRlciA9IGtub3duRm9sZGVycy5kb2N1bWVudHMoKS5nZXRGb2xkZXIodGhpcy5mb2xkZXJOYW1lKTtcclxuICAgICAgICBsZXQgZmlsZSA9IGZvbGRlci5nZXRGaWxlKHRoaXMuZmlsZU5hbWUpO1xyXG5cclxuICAgICAgICBmaWxlLndyaXRlVGV4dChKU09OLnN0cmluZ2lmeSh0aGlzLmNoYXJhY3RlcnMpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTZWxlY3RlZENoYXJhY3RlciA9IChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZElkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VsZWN0ZWRDaGFyYWN0ZXIgPSAoKTogQ2hhcmFjdGVyID0+IHtcclxuICAgICAgICBsZXQgY2hhcmFjdGVyOiBDaGFyYWN0ZXIgPSB0aGlzLmNoYXJhY3RlcnMuZmlsdGVyKCgoY2hhcmFjdGVyKSA9PiBjaGFyYWN0ZXIuaWQgPT0gdGhpcy5zZWxlY3RlZElkKSwgdGhpcy5zZWxlY3RlZElkKVswXTtcclxuXHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZUNoYXJhY3RlcihjaGFyYWN0ZXIpO1xyXG4gICAgICAgIHJldHVybiBjaGFyYWN0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZE5leHRJZCA9ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIGxldCB0bXAgPSB0aGlzLmNoYXJhY3RlcnMuc29ydCgoYSwgYikgPT4gYS5pZCAtIGIuaWQpO1xyXG4gICAgICAgIGlmKHRtcCA9PSBudWxsIHx8IHRtcC5sZW5ndGggPT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgcmV0dXJuIHRtcFt0bXAubGVuZ3RoIC0gMV0uaWQgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoYXJhY3RlcnMgPSAoKTogQ2hhcmFjdGVyW10gPT4ge1xyXG4gICAgICAgIGlmKHRoaXMud2FzTG9hZGVkID09IGZhbHNlKVxyXG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVycztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDaGFyYWN0ZXIgPSAoaWQ6IG51bWJlcik6IENoYXJhY3RlciA9PiB7XHJcbiAgICAgICAgbGV0IGNoYXJhY3RlcjogQ2hhcmFjdGVyID0gdGhpcy5jaGFyYWN0ZXJzLmZpbmQoKGNoYXJhY3RlcikgPT4gY2hhcmFjdGVyLmlkID09IGlkKTtcclxuXHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZUNoYXJhY3RlcihjaGFyYWN0ZXIpO1xyXG4gICAgICAgIHJldHVybiBjaGFyYWN0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGVDaGFyYWN0ZXIgPSAoY2hhcmFjdGVyOiBDaGFyYWN0ZXIpID0+IHtcclxuICAgICAgICBpZihjaGFyYWN0ZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZihjaGFyYWN0ZXIudHJlYXN1cmUgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGNoYXJhY3Rlci50cmVhc3VyZSA9IG5ldyBUcmVhc3VyZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRDaGFyYWN0ZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzW3RoaXMuY2hhcmFjdGVycy5sZW5ndGhdID0gbmV3IENoYXJhY3Rlcih0aGlzLmZpbmROZXh0SWQoKSk7XHJcbiAgICAgICAgdGhpcy5zYXZlRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUNoYXJhY3RlciA9IChpZCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuY2hhcmFjdGVycy5maW5kSW5kZXgoKGNoYXJhY3RlcikgPT4gY2hhcmFjdGVyLmlkID09IGlkKTtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYXJhY3RlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMucGxheWVyTmFtZSA9IFwiTmV3IFBsYXllclwiO1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyTmFtZSA9IFwiTmV3IENoYXJhY3RlclwiO1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAxO1xyXG4gICAgICAgIHRoaXMueHAgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RyZW5ndGggPSAzO1xyXG4gICAgICAgIHRoaXMuZGV4dGVyaXR5ID0gMztcclxuICAgICAgICB0aGlzLmNvbnN0aXR1dGlvbiA9IDM7XHJcbiAgICAgICAgdGhpcy5pbnRlbGxpZ2VuY2UgPSAzO1xyXG4gICAgICAgIHRoaXMud2lzZG9tID0gMztcclxuICAgICAgICB0aGlzLmNoYXJpc21hID0gMztcclxuICAgICAgICB0aGlzLmFjID0gOTtcclxuICAgICAgICB0aGlzLndlYXBvbnMgPSBuZXcgQXJyYXk8V2VhcG9uPigpO1xyXG4gICAgICAgIHRoaXMudHJlYXN1cmUgPSBuZXcgVHJlYXN1cmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgcGxheWVyTmFtZTogc3RyaW5nO1xyXG4gICAgY2hhcmFjdGVyTmFtZTogc3RyaW5nO1xyXG4gICAgYWxpZ25tZW50OiBzdHJpbmc7XHJcbiAgICBjbGFzczogQ2xhc3M7XHJcbiAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgeHA6IG51bWJlcjtcclxuICAgIHN0cmVuZ3RoOiBudW1iZXI7XHJcbiAgICBkZXh0ZXJpdHk6IG51bWJlcjtcclxuICAgIGNvbnN0aXR1dGlvbjogbnVtYmVyO1xyXG4gICAgaW50ZWxsaWdlbmNlOiBudW1iZXI7XHJcbiAgICB3aXNkb206IG51bWJlcjtcclxuICAgIGNoYXJpc21hOiBudW1iZXI7XHJcbiAgICBhYzogbnVtYmVyO1xyXG4gICAgd2VhcG9uczogV2VhcG9uW107XHJcbiAgICBtYWdpY0VxdWlwbWVudDogc3RyaW5nO1xyXG4gICAgcmVndWxhckVxdWlwbWVudDogc3RyaW5nO1xyXG4gICAgam91cm5hbDogc3RyaW5nO1xyXG4gICAgbm90ZXM6IHN0cmluZztcclxuICAgIHNwZWxsczE6IHN0cmluZztcclxuICAgIHNwZWxsczI6IHN0cmluZztcclxuICAgIHNwZWxsczM6IHN0cmluZztcclxuICAgIHNwZWxsczQ6IHN0cmluZztcclxuICAgIHNwZWxsczU6IHN0cmluZztcclxuICAgIHNwZWxsczY6IHN0cmluZztcclxuICAgIHNwZWxsczc6IHN0cmluZztcclxuICAgIHNwZWxsczg6IHN0cmluZztcclxuICAgIHNwZWxsczk6IHN0cmluZztcclxuICAgIHNwZWxsc1VzZWQxOiBudW1iZXI7XHJcbiAgICBzcGVsbHNVc2VkMjogbnVtYmVyO1xyXG4gICAgc3BlbGxzVXNlZDM6IG51bWJlcjtcclxuICAgIHNwZWxsc1VzZWQ0OiBudW1iZXI7XHJcbiAgICBzcGVsbHNVc2VkNTogbnVtYmVyO1xyXG4gICAgc3BlbGxzVXNlZDY6IG51bWJlcjtcclxuICAgIHNwZWxsc1VzZWQ3OiBudW1iZXI7XHJcbiAgICBzcGVsbHNVc2VkODogbnVtYmVyO1xyXG4gICAgc3BlbGxzVXNlZDk6IG51bWJlcjtcclxuICAgIHRyZWFzdXJlOiBUcmVhc3VyZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZWFzdXJlIHtcclxuICAgIHBwOiBudW1iZXI7XHJcbiAgICBncDogbnVtYmVyO1xyXG4gICAgZXA6IG51bWJlcjtcclxuICAgIHNwOiBudW1iZXI7XHJcbiAgICBjcDogbnVtYmVyO1xyXG4gICAgaXRlbXM6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXBvbiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICByYW5nZTogc3RyaW5nO1xyXG4gICAgZGFtYWdlOiBzdHJpbmc7XHJcbiAgICBhdHRhY2s6IHN0cmluZztcclxufSJdfQ==