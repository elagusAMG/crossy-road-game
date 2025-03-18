import * as THREE from "three";
import { TILE_SIZE, TILES_PER_ROW } from "../consts";

export function Road(rowIndex: number) {
  const road = new THREE.Group();
  road.position.y = rowIndex * TILE_SIZE;

  const foundation = new THREE.Mesh(
    new THREE.PlaneGeometry(TILES_PER_ROW * TILE_SIZE, TILE_SIZE),
    new THREE.MeshLambertMaterial({ color: 0x454a59 })
  );
  road.add(foundation);

  return road;
}