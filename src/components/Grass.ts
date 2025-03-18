import { TILE_SIZE, TILES_PER_ROW } from './../consts';
import * as THREE from "three";

export function Grass(rowIndex: number) {
  const grass = new THREE.Group();
  grass.position.y = rowIndex * TILE_SIZE;

  const foundation = new THREE.Mesh(
    new THREE.BoxGeometry(TILES_PER_ROW * TILE_SIZE, TILE_SIZE, 3),
    new THREE.MeshLambertMaterial({ color: 0xbaf455 })
  );
  foundation.position.z = 1.5;
  grass.add(foundation);

  return grass;
}