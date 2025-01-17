/* eslint-disable @typescript-eslint/no-use-before-define */

export const LOCALES = {
    ENGLISH: "en",
    PORTUGUES: "pt-BR",
};

export const messages = {
    "pt-BR": {
        //Header
        headerTitle: "Lista de tarefas",
        //TaskCard
        taskCardText1: "Você tem ",
        taskCardText2: " tarefas não finalizadas",
        taskCardinputPlaceholder: "Pesquisa",
        //ModalCreateTask
        modalCreateTaskSubmit: "Adicionar tarefa",
        modalCreateTaskTitleInput: "Titulo: ",
        modalCreateTaskDescriptionInput: "Descrição: ",
        //ModalTaskComplete
        modalTaskCompleteDelete: "Arraste as tarefas para deletar",
        modalTaskCompleteUnarchive: "Tarefas completadas",
        //ProgressTask
        progressTask: "tarefas prontas",
    },
    en: {
        //Header
        headerTitle: "To-do list",
        //TaskCard
        taskCardText1: "You have ",
        taskCardText2: "unfinished tasks",
        taskCardinputPlaceholder: "Find",
        //ModalCreateTask
        modalCreateTaskSubmit: "Add task",
        modalCreateTaskTitleInput: "Title: ",
        modalCreateTaskDescriptionInput: "Description:",
        //ModalTaskComplete
        modalTaskCompleteDelete: "Drag tasks to delete",
        modalTaskCompleteUnarchive: "Tasks completed",
        //ProgressTask
        progressTask: "ready tasks",
    },
};
