import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';
import { RemindersListComponent } from './pages/reminders-list/reminders-list.component';
import { TagsListComponent } from './pages/tags-list/tags-list.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
      { path: '', component: NotesListComponent },
      { path: 'new', component: NoteDetailsComponent},
      { path: 'details', component: NoteDetailsComponent},
      { path: 'reminders', component: RemindersListComponent },
      { path: 'tags', component: TagsListComponent}
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
