// tslint:disable-next-line: no-reference
/// <reference path="../../types/phaser.d.ts" />

export class EnemiesState {

  public static ENEMIES_SPEED: number = 80;

  public static currentDirection: number;
  public static previousDirection: number;

  public static processMovement(enemy: Phaser.Physics.Arcade.Sprite, enemyMovement: number): void {

    const stop: boolean = enemy.getData("stop");
    const type: string = enemy.getData("type");

    if (stop) { return; }

    enemy.setVelocity(0, 0);

    if (enemyMovement === Phaser.UP) {
      // this.previousDirection = this.currentDirection;
      // this.currentDirection = Phaser.UP;
      enemy.anims.play("game-anim-" + type + "-enemy-up", true);
      enemy.setVelocity(0, -this.ENEMIES_SPEED);

    } else if (enemyMovement === Phaser.RIGHT) {
      // this.previousDirection = this.currentDirection;
      // this.currentDirection = Phaser.RIGHT;
      enemy.anims.play("game-anim-" + type + "-enemy-right", true);
      enemy.setVelocity(this.ENEMIES_SPEED, 0);

    } else if (enemyMovement === Phaser.DOWN) {
      // this.previousDirection = this.currentDirection;
      // this.currentDirection = Phaser.DOWN;
        enemy.anims.play("game-anim-" + type + "-enemy-down", true);
        enemy.setVelocity(0, this.ENEMIES_SPEED);

    } else if (enemyMovement === Phaser.LEFT) {
      // this.previousDirection = this.currentDirection;
      // this.currentDirection = Phaser.LEFT;
      enemy.anims.play("game-anim-" + type + "-enemy-left", true);
      enemy.setVelocity(-this.ENEMIES_SPEED, 0);
    }

    // align to grid on direction change
    if (this.currentDirection !== this.previousDirection) {
      // const newPosX = Phaser.Math.Snap.To(enemy.x, 24);
      // const newPosY = Phaser.Math.Snap.To(enemy.y, 24);
      // enemy.setPosition(newPosX, newPosY);
    }
  }

  public static isDirectionDown(): boolean {
    return (this.currentDirection === Phaser.DOWN);
  }

  public static isDirectionLeft(): boolean {
    return (this.currentDirection === Phaser.LEFT);
  }

  public static isDirectionRight(): boolean {
    return (this.currentDirection === Phaser.RIGHT);
  }

  public static isDirectionUp(): boolean {
    return (this.currentDirection === Phaser.UP);
  }
}
