import { CharacterListComponent } from "./pages/characterlist.component";
import { CharacterComponent } from "./pages/character.component";
import { AttributesComponent } from "./pages/attributes.component";
import { CombatComponent } from "./pages/combat.component";
import { SavesComponent } from "./pages/saves.component";
import { SpellbookComponent } from "./pages/spellbook.component";
import { SpellslotsComponent } from "./pages/spellslots.component";
import { NotesComponent } from "./pages/notes.component";
import { EquipmentComponent } from "./pages/equipment.component";
import { TreasureComponent } from "./pages/treasure.component";
import { AbilitiesComponent } from "./pages/abilities.component";

export const routes = [
  { path: "", component: CharacterListComponent },
  { path: "character", component: CharacterComponent },
  { path: "attributes", component: AttributesComponent },
  { path: "combat", component: CombatComponent },
  { path: "saves", component: SavesComponent },
  { path: "spellbook", component: SpellbookComponent },
  { path: "spellslots", component: SpellslotsComponent },
  { path: "notes", component: NotesComponent },
  { path: "equipment", component: EquipmentComponent },
  { path: "treasure", component: TreasureComponent },
  { path: "abilities", component: AbilitiesComponent },
];

export const navigatableComponents = [
  CharacterListComponent,
  CharacterComponent,
  AttributesComponent,
  CombatComponent,
  SavesComponent,
  SpellbookComponent,
  SpellslotsComponent,
  NotesComponent,
  EquipmentComponent,
  TreasureComponent,
  AbilitiesComponent
];