import { CharacterListComponent } from "./pages/characterlist.component";
import { CharacterComponent } from "./pages/character.component";
import { AttributesComponent } from "./pages/attributes.component";
import { CombatComponent } from "./pages/combat.component";
import { SavesComponent } from "./pages/saves.component";
import { SpellbookComponent } from "./pages/spellbook.component";
import { SpellslotsComponent } from "./pages/spellslots.component";
import { NotesComponent } from "./pages/notes.component";

export const routes = [
  { path: "", component: CharacterListComponent },
  { path: "character", component: CharacterComponent },
  { path: "attributes", component: AttributesComponent },
  { path: "combat", component: CombatComponent },
  { path: "saves", component: SavesComponent },
  { path: "spellbook", component: SpellbookComponent },
  { path: "spellslots", component: SpellslotsComponent },
  { path: "notes", component: NotesComponent },
];

export const navigatableComponents = [
  CharacterListComponent,
  CharacterComponent,
  AttributesComponent,
  CombatComponent,
  SavesComponent,
  SpellbookComponent,
  SpellslotsComponent,
  NotesComponent
];