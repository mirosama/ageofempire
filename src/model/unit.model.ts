export interface IUnit {
   id?: number;
   name?: string;
   description?: string;
   expansion?:string;
   age?:string; 
   cost?: ICost;
   build_time?: number;
   reload_time?: number;
   attack_delay?: number;
   movement_rate?: number;
   line_of_sight?: number;
   hit_points?:number;
   accuracy?:string;

}

export interface ICost {
    Wood?: number;
    Gold?: number;
}