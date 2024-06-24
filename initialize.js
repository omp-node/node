import "./events.js";
import {
  ActorPool,
  GangZonePool,
  MenuPool,
  ObjectPool,
  PickupPool,
  PlayerObjectPool,
  PlayerPool,
  TextDrawPool,
  TextLabelPool,
  VehiclePool,
} from "./pools.js";
import * as constants from "./constants.js";

omp.log = __internal_omp.log;
omp.resource = __internal_resource;

function onResourceStart(error) {
  if (!error) {
    omp.players = new PlayerPool();
    for (let i = 0; i < constants.PLAYER_POOL_SIZE; i++) {
      try {
        omp.players.add_INTERNAL_UNSAFE(i, true);
      } catch (e) {}
    }

    omp.vehicles = new VehiclePool();
    for (let i = 0; i < constants.VEHICLE_POOL_SIZE; i++) {
      try {
        omp.vehicles.add_INTERNAL_UNSAFE(i, true);
      } catch (e) {}
    }

    omp.objects = new ObjectPool();
    for (let i = 0; i < constants.OBJECT_POOL_SIZE; i++) {
      try {
        omp.objects.add_INTERNAL_UNSAFE(i, true);
      } catch (e) {}
    }

    omp.textdraws = new TextDrawPool();
    for (let i = 0; i < constants.GLOBAL_TEXTDRAW_POOL_SIZE; i++) {
      try {
        omp.textdraws.add_INTERNAL_UNSAFE(i, true);
      } catch (e) {}
    }

    omp.pickups = new PickupPool();
    for (let i = 0; i < constants.PICKUP_POOL_SIZE; i++) {
      try {
        omp.pickups.add_INTERNAL_UNSAFE(i, true);
      } catch (e) {}
    }

    omp.gangzones = new GangZonePool();
    for (let i = 0; i < constants.GANG_ZONE_POOL_SIZE; i++) {
      try {
        omp.gangzones.add_INTERNAL_UNSAFE(i, true);
      } catch (e) {}
    }

    omp.textlabels = new TextLabelPool();
    for (let i = 0; i < constants.TEXT_LABEL_POOL_SIZE; i++) {
      try {
        omp.textlabels.add_INTERNAL_UNSAFE(i, true);
      } catch (e) {}
    }

    omp.actors = new ActorPool();
    for (let i = 0; i < constants.ACTOR_POOL_SIZE; i++) {
      try {
        omp.actors.add_INTERNAL_UNSAFE(i, true);
      } catch (e) {}
    }

    omp.menus = new MenuPool();
    for (let i = 0; i < constants.MENU_POOL_SIZE; i++) {
      try {
        omp.menus.add_INTERNAL_UNSAFE(i, true);
      } catch (e) {}
    }

    omp.playerObjects = new PerPlayerEntityPool();
    omp.players.forEach((player, _) => {
      const entries = omp.playerObjects.entries_INTERNAL_UNSAFE();
      const pool = new PlayerObjectPool(player);

      for (let i = 0; i < constants.OBJECT_POOL_SIZE; i++) {
        try {
          pool.add_INTERNAL_UNSAFE(i, true);
        } catch (e) {}
      }

      entries.set(player.getID(), pool);
    });

    omp.playerTextDraws = new PerPlayerEntityPool();
    omp.players.forEach((player, _) => {
      const entries = omp.playerTextDraws.entries_INTERNAL_UNSAFE();
      const pool = new PlayerTextDrawPool(player);

      for (let i = 0; i < constants.TEXT_LABEL_POOL_SIZE; i++) {
        try {
          pool.add_INTERNAL_UNSAFE(i, true);
        } catch (e) {}
      }

      entries.set(player.getID(), pool);
    });

    omp.playerTextLabels = new PerPlayerEntityPool();
    omp.players.forEach((player, _) => {
      const entries = omp.playerTextLabels.entries_INTERNAL_UNSAFE();
      const pool = new PlayerTextLabelPool(player);

      for (let i = 0; i < constants.TEXT_LABEL_POOL_SIZE; i++) {
        try {
          pool.add_INTERNAL_UNSAFE(i, true);
        } catch (e) {}
      }

      entries.set(player.getID(), pool);
    });
  }
}

omp.removeListener("resourceStart", onResourceStart);
omp.on("resourceStart", onResourceStart);
