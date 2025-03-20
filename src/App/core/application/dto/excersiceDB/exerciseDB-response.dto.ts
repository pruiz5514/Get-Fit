export interface IExerciseDBResponse {
    bodyPart:         BodyPart;
    equipment:        Equipment;
    gifUrl:           string;
    id:               string;
    name:             string;
    target:           Target;
    secondaryMuscles: SecondaryMuscle[];
    instructions:     string[];
}

export enum BodyPart {
    Chest = "chest",
}

export enum Equipment {
    Barbell = "barbell",
    Cable = "cable",
    LeverageMachine = "leverage machine",
}

export enum SecondaryMuscle {
    Deltoids = "deltoids",
    Shoulders = "shoulders",
    Trapezius = "trapezius",
    Triceps = "triceps",
}

export enum Target {
    Pectorals = "pectorals",
    SerratusAnterior = "serratus anterior",
}