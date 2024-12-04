'use client';

import React, { useState, useCallback, memo } from 'react';
import { MessageSquare, Clock, CheckCircle, User } from 'lucide-react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import type { DropResult } from '@hello-pangea/dnd';

interface Task {
  id: string;
  title: string;
  customer: string;
  time: string;
  status: 'novo' | 'andamento' | 'concluido';
}

const initialTasks: Task[] = [
  { id: '1', title: 'Suporte Técnico', customer: 'João Silva', time: '5min', status: 'novo' },
  { id: '2', title: 'Dúvida sobre Produto', customer: 'Maria Santos', time: '10min', status: 'novo' },
  { id: '3', title: 'Orçamento', customer: 'Pedro Costa', time: '15min', status: 'andamento' },
  { id: '4', title: 'Instalação', customer: 'Ana Oliveira', time: '20min', status: 'andamento' },
  { id: '5', title: 'Manutenção', customer: 'Carlos Souza', time: '30min', status: 'concluido' },
  { id: '6', title: 'Agendamento', customer: 'Lucia Pereira', time: '8min', status: 'novo' },
  { id: '7', title: 'Pós-venda', customer: 'Roberto Lima', time: '12min', status: 'andamento' },
  { id: '8', title: 'Reclamação', customer: 'Sandra Melo', time: '25min', status: 'concluido' },
  { id: '9', title: 'Cotação', customer: 'Fernando Costa', time: '18min', status: 'novo' }
];

const columns = [
  { id: 'novo', title: 'Novos Atendimentos', icon: MessageSquare },
  { id: 'andamento', title: 'Em Andamento', icon: Clock },
  { id: 'concluido', title: 'Concluídos', icon: CheckCircle }
] as const;

interface TaskCardProps {
  task: Task;
  index: number;
}

const TaskCard = memo(({ task, index }: TaskCardProps) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={`
          bg-black/40 p-4 rounded-lg border
          transform transition-all duration-300 ease-in-out
          ${snapshot.isDragging 
            ? 'border-[#37e067] shadow-lg shadow-[#37e067]/20 scale-[1.02] rotate-[1deg] z-50' 
            : 'border-white/10 hover:border-[#37e067]/30 hover:scale-[1.01]'}
        `}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#37e067] font-medium">{task.title}</span>
          <MessageSquare className="w-4 h-4 text-gray-400" />
        </div>
        <div className="flex items-center text-sm text-gray-400 space-x-4">
          <div className="flex items-center">
            <User className="w-3 h-3 mr-1" />
            {task.customer}
          </div>
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {task.time}
          </div>
        </div>
      </div>
    )}
  </Draggable>
));

TaskCard.displayName = 'TaskCard';

interface ColumnProps {
  id: string;
  title: string;
  icon: React.ElementType;
  tasks: Task[];
}

const Column = memo(({ id, title, icon: Icon, tasks }: { id: string, title: string, icon: React.ElementType, tasks: Task[] }) => (
  <Droppable droppableId={id}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.droppableProps}
        className={`
          bg-black/20 p-4 rounded-xl border transition-all duration-300
          ${snapshot.isDraggingOver 
            ? 'border-[#37e067]/50 bg-black/30 scale-[1.02] shadow-lg shadow-[#37e067]/10' 
            : 'border-white/10 hover:border-white/20'}
          min-h-[200px]
        `}
      >
        <div className="flex items-center space-x-2 mb-4">
          <Icon className={`w-5 h-5 ${snapshot.isDraggingOver ? 'text-[#37e067]' : 'text-gray-400'} transition-colors duration-300`} />
          <h3 className="text-white font-medium">{title}</h3>
          <span className={`px-2 py-1 rounded text-sm transition-colors duration-300 ${
            snapshot.isDraggingOver 
              ? 'bg-[#37e067]/20 text-[#37e067]' 
              : 'bg-white/10 text-gray-400'
          }`}>
            {tasks.length}
          </span>
        </div>
        <div className="space-y-3">
          {tasks.map((task, index) => (
            <TaskCard key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      </div>
    )}
  </Droppable>
));

Column.displayName = 'Column';

const InteractiveKanban: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const tasksByColumn = useCallback((columnId: Task['status']) => 
    tasks.filter(task => task.status === columnId),
    [tasks]
  );

  const onDragEnd = useCallback((result: DropResult) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const allTasks = Array.from(tasks);
    const [movedTask] = allTasks.splice(source.index, 1);
    
    (movedTask as Task).status = destination.droppableId as Task['status'];
    allTasks.splice(destination.index, 0, movedTask);
    
    setTasks(allTasks);
  }, [tasks]);

  return (
    <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-white/60 text-sm">ZappFlow - Kanban de Atendimentos</div>
      </div>

      <div className="mb-6 bg-[#37e067]/10 p-4 rounded-lg border border-[#37e067]/20">
        <p className="text-white text-center">
          ✨ Arraste os cards entre as colunas para gerenciar seus atendimentos
        </p>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {columns.map(({ id, title, icon }) => (
            <Column
              key={id}
              id={id}
              title={title}
              icon={icon}
              tasks={tasksByColumn(id)}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default memo(InteractiveKanban);
