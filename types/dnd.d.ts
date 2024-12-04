import { DraggableProvided, DroppableProvided, DraggableStateSnapshot, DroppableStateSnapshot } from '@hello-pangea/dnd';

declare module '@hello-pangea/dnd' {
  export type DraggableRenderFn = (provided: DraggableProvided, snapshot: DraggableStateSnapshot) => React.ReactNode;
  export type DroppableRenderFn = (provided: DroppableProvided, snapshot: DroppableStateSnapshot) => React.ReactNode;
}
