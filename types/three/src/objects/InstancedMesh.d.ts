import { BufferGeometry } from '../core/BufferGeometry';
import { Material } from './../materials/Material';
import { BufferAttribute } from './../core/BufferAttribute';
import { Mesh } from './Mesh';
import { Matrix4 } from './../math/Matrix4';
import { Color } from './../math/Color';

export class InstancedMesh<Geom extends BufferGeometry, Mat extends Material[] | Material> extends Mesh {
    constructor(geometry: Geom, material: Mat, count: number);

    count: number;
    instanceColor: null | BufferAttribute;
    instanceMatrix: BufferAttribute;
    readonly isInstancedMesh: true;

    getColorAt(index: number, color: Color): void;
    getMatrixAt(index: number, matrix: Matrix4): void;
    setColorAt(index: number, color: Color): void;
    setMatrixAt(index: number, matrix: Matrix4): void;
    dispose(): void;
}
