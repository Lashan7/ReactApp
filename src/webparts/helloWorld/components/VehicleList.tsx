import * as React from "react";

import { IVehicle } from "./IVehicle";

export interface IVehicleListProps {
  vehicles: IVehicle[];
}

export class VehicleList extends React.Component<IVehicleListProps, {}> {}
