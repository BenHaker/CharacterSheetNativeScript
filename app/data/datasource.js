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
            return _this.characters.filter((function (character) { return character.id == _this.selectedId; }), _this.selectedId)[0];
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
            return _this.characters.find(function (character) { return character.id == id; });
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
    }
    return Character;
}());
exports.Character = Character;
var Weapon = (function () {
    function Weapon() {
    }
    return Weapon;
}());
exports.Weapon = Weapon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGFzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsMkNBQXlEO0FBSXpELElBQWEsV0FBVztJQUR4QjtRQUFBLGlCQTRFQztRQXhFVyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBVyxpQkFBaUIsQ0FBQztRQUN2QyxhQUFRLEdBQVcsaUJBQWlCLENBQUM7UUFDckMsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUVwQixtQkFBYyxHQUFHLFVBQUMsUUFBUTtZQUN0QixLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUM7WUFDOUMsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2YsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQyxDQUFBO1FBRUQsc0JBQWlCLEdBQUcsVUFBQyxPQUFPO1lBQ3hCLE9BQU8sS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUE7UUFFRCxhQUFRLEdBQUc7WUFDUCxJQUFJLE1BQU0sR0FBRywwQkFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakUsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFekMsSUFBSSxDQUFDLFFBQVEsRUFBRTtpQkFDVixJQUFJLENBQUMsVUFBQSxJQUFJO2dCQUNOLEVBQUUsQ0FBQSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDMUIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2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QUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBM0VELElBMkVDO0FBM0VZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtHQUNBLFdBQVcsQ0EyRXZCO0FBM0VZLGtDQUFXO0FBNkV4QjtJQUNJLG1CQUFZLEVBQVU7UUFDbEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7SUFDdkMsQ0FBQztJQWlCTCxnQkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFoQ1ksOEJBQVM7QUFrQ3RCO0lBQUE7SUFLQSxDQUFDO0lBQUQsYUFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBTFksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGtub3duRm9sZGVycywgRmlsZSwgRm9sZGVyIH0gZnJvbSBcImZpbGUtc3lzdGVtXCI7XHJcbmltcG9ydCB7IENsYXNzIH0gZnJvbSAnLi9tZXRhZGF0YXNvdXJjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGNoYXJhY3RlcnM6IENoYXJhY3RlcltdO1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZElkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHdhc0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBmb2xkZXJOYW1lOiBzdHJpbmcgPSBcImNoYXJhY3RlcnMtZGF0YVwiO1xyXG4gICAgcHJpdmF0ZSBmaWxlTmFtZTogc3RyaW5nID0gXCJjaGFyYWN0ZXJzLmpzb25cIjtcclxuICAgIHByaXZhdGUgbG9hZGVkRnVuY3Rpb25zID0gW107XHJcbiAgICBwcml2YXRlIHN1YkNvZGUgPSAwO1xyXG5cclxuICAgIGFkZExvYWRlZEV2ZW50ID0gKGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkZWRGdW5jdGlvbnNbdGhpcy5zdWJDb2RlXSA9IGNhbGxiYWNrO1xyXG4gICAgICAgICsrdGhpcy5zdWJDb2RlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN1YkNvZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTG9hZGVkRXZlbnQgPSAoc3ViQ29kZSkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmxvYWRlZEZ1bmN0aW9uc1tzdWJDb2RlXTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkRGF0YSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZm9sZGVyID0ga25vd25Gb2xkZXJzLmRvY3VtZW50cygpLmdldEZvbGRlcih0aGlzLmZvbGRlck5hbWUpO1xyXG4gICAgICAgIGxldCBmaWxlID0gZm9sZGVyLmdldEZpbGUodGhpcy5maWxlTmFtZSk7XHJcblxyXG4gICAgICAgIGZpbGUucmVhZFRleHQoKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHsgXHJcbiAgICAgICAgICAgICAgICBpZihkYXRhICE9IG51bGwgJiYgZGF0YSAhPSBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IEpTT04ucGFyc2UoZGF0YSk7IFxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVycyA9IG5ldyBBcnJheTxDaGFyYWN0ZXI+KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhc0xvYWRlZCA9IHRydWU7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZWRGdW5jdGlvbnMuZm9yRWFjaCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKCkpfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlRGF0YSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZm9sZGVyID0ga25vd25Gb2xkZXJzLmRvY3VtZW50cygpLmdldEZvbGRlcih0aGlzLmZvbGRlck5hbWUpO1xyXG4gICAgICAgIGxldCBmaWxlID0gZm9sZGVyLmdldEZpbGUodGhpcy5maWxlTmFtZSk7XHJcblxyXG4gICAgICAgIGZpbGUud3JpdGVUZXh0KEpTT04uc3RyaW5naWZ5KHRoaXMuY2hhcmFjdGVycykpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNlbGVjdGVkQ2hhcmFjdGVyID0gKGlkOiBudW1iZXIpID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZWxlY3RlZENoYXJhY3RlciA9ICgpOiBDaGFyYWN0ZXIgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlcnMuZmlsdGVyKCgoY2hhcmFjdGVyKSA9PiBjaGFyYWN0ZXIuaWQgPT0gdGhpcy5zZWxlY3RlZElkKSwgdGhpcy5zZWxlY3RlZElkKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kTmV4dElkID0gKCk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgbGV0IHRtcCA9IHRoaXMuY2hhcmFjdGVycy5zb3J0KChhLCBiKSA9PiBhLmlkIC0gYi5pZCk7XHJcbiAgICAgICAgaWYodG1wID09IG51bGwgfHwgdG1wLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gdG1wW3RtcC5sZW5ndGggLSAxXS5pZCArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hhcmFjdGVycyA9ICgpOiBDaGFyYWN0ZXJbXSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy53YXNMb2FkZWQgPT0gZmFsc2UpXHJcbiAgICAgICAgICAgIHRoaXMubG9hZERhdGEoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoYXJhY3RlciA9IChpZDogbnVtYmVyKTogQ2hhcmFjdGVyID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXJzLmZpbmQoKGNoYXJhY3RlcikgPT4gY2hhcmFjdGVyLmlkID09IGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDaGFyYWN0ZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJzW3RoaXMuY2hhcmFjdGVycy5sZW5ndGhdID0gbmV3IENoYXJhY3Rlcih0aGlzLmZpbmROZXh0SWQoKSk7XHJcbiAgICAgICAgdGhpcy5zYXZlRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUNoYXJhY3RlciA9IChpZCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuY2hhcmFjdGVycy5maW5kSW5kZXgoKGNoYXJhY3RlcikgPT4gY2hhcmFjdGVyLmlkID09IGlkKTtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYXJhY3RlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMucGxheWVyTmFtZSA9IFwiTmV3IFBsYXllclwiO1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyTmFtZSA9IFwiTmV3IENoYXJhY3RlclwiO1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAxO1xyXG4gICAgICAgIHRoaXMueHAgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RyZW5ndGggPSAzO1xyXG4gICAgICAgIHRoaXMuZGV4dGVyaXR5ID0gMztcclxuICAgICAgICB0aGlzLmNvbnN0aXR1dGlvbiA9IDM7XHJcbiAgICAgICAgdGhpcy5pbnRlbGxpZ2VuY2UgPSAzO1xyXG4gICAgICAgIHRoaXMud2lzZG9tID0gMztcclxuICAgICAgICB0aGlzLmNoYXJpc21hID0gMztcclxuICAgICAgICB0aGlzLmFjID0gOTtcclxuICAgICAgICB0aGlzLndlYXBvbnMgPSBuZXcgQXJyYXk8V2VhcG9uPigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBwbGF5ZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBjaGFyYWN0ZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBhbGlnbm1lbnQ6IHN0cmluZztcclxuICAgIGNsYXNzOiBDbGFzcztcclxuICAgIGxldmVsOiBudW1iZXI7XHJcbiAgICB4cDogbnVtYmVyO1xyXG4gICAgc3RyZW5ndGg6IG51bWJlcjtcclxuICAgIGRleHRlcml0eTogbnVtYmVyO1xyXG4gICAgY29uc3RpdHV0aW9uOiBudW1iZXI7XHJcbiAgICBpbnRlbGxpZ2VuY2U6IG51bWJlcjtcclxuICAgIHdpc2RvbTogbnVtYmVyO1xyXG4gICAgY2hhcmlzbWE6IG51bWJlcjtcclxuICAgIGFjOiBudW1iZXI7XHJcbiAgICB3ZWFwb25zOiBXZWFwb25bXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXBvbiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICByYW5nZTogc3RyaW5nO1xyXG4gICAgZGFtYWdlOiBzdHJpbmc7XHJcbiAgICBhdHRhY2s6IHN0cmluZztcclxufSJdfQ==