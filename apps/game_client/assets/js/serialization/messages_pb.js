// source: messages.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

<<<<<<< HEAD:apps/game_client/assets/js/serialization/messages_pb.js
goog.exportSymbol('proto.AttackPB', null, global);
goog.exportSymbol('proto.AttackParametersPB', null, global);
goog.exportSymbol('proto.BountyInfoPB', null, global);
goog.exportSymbol('proto.BushPB', null, global);
goog.exportSymbol('proto.ChangeTickratePB', null, global);
goog.exportSymbol('proto.ClientConfigPB', null, global);
goog.exportSymbol('proto.ConfigCharacterPB', null, global);
goog.exportSymbol('proto.ConfigGamePB', null, global);
goog.exportSymbol('proto.ConfigMapPB', null, global);
goog.exportSymbol('proto.ConfigServerUpdatePB', null, global);
goog.exportSymbol('proto.ConfigSkillPB', null, global);
goog.exportSymbol('proto.ConfigurationPB', null, global);
goog.exportSymbol('proto.CratePB', null, global);
goog.exportSymbol('proto.CrateStatusPB', null, global);
goog.exportSymbol('proto.CurrencyRewardPB', null, global);
goog.exportSymbol('proto.DirectionPB', null, global);
goog.exportSymbol('proto.EffectPB', null, global);
goog.exportSymbol('proto.EntityPB', null, global);
goog.exportSymbol('proto.EntityPB.AditionalInfoCase', null, global);
goog.exportSymbol('proto.GameActionPB', null, global);
goog.exportSymbol('proto.GameActionPB.ActionTypeCase', null, global);
goog.exportSymbol('proto.GameEventPB', null, global);
goog.exportSymbol('proto.GameEventPB.EventCase', null, global);
goog.exportSymbol('proto.GameFinishedPB', null, global);
goog.exportSymbol('proto.GameJoinedPB', null, global);
goog.exportSymbol('proto.GameStatePB', null, global);
goog.exportSymbol('proto.GameStatusPB', null, global);
goog.exportSymbol('proto.ItemPB', null, global);
goog.exportSymbol('proto.JoinedLobbyPB', null, global);
goog.exportSymbol('proto.KillEntryPB', null, global);
goog.exportSymbol('proto.LeaveLobbyPB', null, global);
goog.exportSymbol('proto.LeftLobbyPB', null, global);
goog.exportSymbol('proto.LobbyEventPB', null, global);
goog.exportSymbol('proto.LobbyEventPB.EventCase', null, global);
goog.exportSymbol('proto.MovePB', null, global);
goog.exportSymbol('proto.ObstaclePB', null, global);
goog.exportSymbol('proto.PingUpdatePB', null, global);
goog.exportSymbol('proto.PlayerActionPB', null, global);
goog.exportSymbol('proto.PlayerActionTypePB', null, global);
goog.exportSymbol('proto.PlayerPB', null, global);
goog.exportSymbol('proto.PoolPB', null, global);
goog.exportSymbol('proto.PoolStatusPB', null, global);
goog.exportSymbol('proto.PositionPB', null, global);
goog.exportSymbol('proto.PowerUpPB', null, global);
goog.exportSymbol('proto.PowerUpstatusPB', null, global);
goog.exportSymbol('proto.ProjectilePB', null, global);
goog.exportSymbol('proto.ProjectileStatusPB', null, global);
goog.exportSymbol('proto.SelectBountyPB', null, global);
goog.exportSymbol('proto.ToggleBotsPB', null, global);
goog.exportSymbol('proto.ToggleZonePB', null, global);
goog.exportSymbol('proto.TrapPB', null, global);
goog.exportSymbol('proto.TrapStatusPB', null, global);
goog.exportSymbol('proto.UseItemPB', null, global);
goog.exportSymbol('proto.ZonePB', null, global);
=======
goog.exportSymbol('proto.Attack', null, global);
goog.exportSymbol('proto.AttackParameters', null, global);
goog.exportSymbol('proto.BountyInfo', null, global);
goog.exportSymbol('proto.Bush', null, global);
goog.exportSymbol('proto.ChangeTickrate', null, global);
goog.exportSymbol('proto.ClientConfig', null, global);
goog.exportSymbol('proto.ConfigCharacter', null, global);
goog.exportSymbol('proto.ConfigGame', null, global);
goog.exportSymbol('proto.ConfigMap', null, global);
goog.exportSymbol('proto.ConfigServerUpdate', null, global);
goog.exportSymbol('proto.ConfigSkill', null, global);
goog.exportSymbol('proto.Configuration', null, global);
goog.exportSymbol('proto.Crate', null, global);
goog.exportSymbol('proto.CrateStatus', null, global);
goog.exportSymbol('proto.CurrencyReward', null, global);
goog.exportSymbol('proto.Direction', null, global);
goog.exportSymbol('proto.Effect', null, global);
goog.exportSymbol('proto.Entity', null, global);
goog.exportSymbol('proto.Entity.AditionalInfoCase', null, global);
goog.exportSymbol('proto.GameAction', null, global);
goog.exportSymbol('proto.GameAction.ActionTypeCase', null, global);
goog.exportSymbol('proto.GameEvent', null, global);
goog.exportSymbol('proto.GameEvent.EventCase', null, global);
goog.exportSymbol('proto.GameFinished', null, global);
goog.exportSymbol('proto.GameJoined', null, global);
goog.exportSymbol('proto.GameState', null, global);
goog.exportSymbol('proto.GameStatus', null, global);
goog.exportSymbol('proto.Item', null, global);
goog.exportSymbol('proto.JoinedLobby', null, global);
goog.exportSymbol('proto.KillEntry', null, global);
goog.exportSymbol('proto.LeaveLobby', null, global);
goog.exportSymbol('proto.LeftLobby', null, global);
goog.exportSymbol('proto.LobbyEvent', null, global);
goog.exportSymbol('proto.LobbyEvent.EventCase', null, global);
goog.exportSymbol('proto.Move', null, global);
goog.exportSymbol('proto.Obstacle', null, global);
goog.exportSymbol('proto.Ping', null, global);
goog.exportSymbol('proto.PingUpdate', null, global);
goog.exportSymbol('proto.Player', null, global);
goog.exportSymbol('proto.PlayerAction', null, global);
goog.exportSymbol('proto.PlayerActionType', null, global);
goog.exportSymbol('proto.Pong', null, global);
goog.exportSymbol('proto.Pool', null, global);
goog.exportSymbol('proto.PoolStatus', null, global);
goog.exportSymbol('proto.Position', null, global);
goog.exportSymbol('proto.PowerUp', null, global);
goog.exportSymbol('proto.PowerUpstatus', null, global);
goog.exportSymbol('proto.Projectile', null, global);
goog.exportSymbol('proto.ProjectileStatus', null, global);
goog.exportSymbol('proto.SelectBounty', null, global);
goog.exportSymbol('proto.ToggleBots', null, global);
goog.exportSymbol('proto.ToggleZone', null, global);
goog.exportSymbol('proto.Trap', null, global);
goog.exportSymbol('proto.TrapStatus', null, global);
goog.exportSymbol('proto.UseItem', null, global);
goog.exportSymbol('proto.Zone', null, global);
>>>>>>> main:apps/game_client/assets/js/protobuf/messages_pb.js
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DirectionPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DirectionPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DirectionPB.displayName = 'proto.DirectionPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PositionPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PositionPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PositionPB.displayName = 'proto.PositionPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LobbyEventPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.LobbyEventPB.oneofGroups_);
};
goog.inherits(proto.LobbyEventPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LobbyEventPB.displayName = 'proto.LobbyEventPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LeaveLobbyPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LeaveLobbyPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LeaveLobbyPB.displayName = 'proto.LeaveLobbyPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LeftLobbyPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LeftLobbyPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LeftLobbyPB.displayName = 'proto.LeftLobbyPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoinedLobbyPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoinedLobbyPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoinedLobbyPB.displayName = 'proto.JoinedLobbyPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GameEventPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.GameEventPB.oneofGroups_);
};
goog.inherits(proto.GameEventPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GameEventPB.displayName = 'proto.GameEventPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD:apps/game_client/assets/js/serialization/messages_pb.js
proto.GameFinishedPB = function(opt_data) {
=======
proto.Ping = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Ping, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Ping.displayName = 'proto.Ping';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GameFinished = function(opt_data) {
>>>>>>> main:apps/game_client/assets/js/protobuf/messages_pb.js
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GameFinishedPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GameFinishedPB.displayName = 'proto.GameFinishedPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PingUpdatePB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PingUpdatePB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PingUpdatePB.displayName = 'proto.PingUpdatePB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GameJoinedPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GameJoinedPB.repeatedFields_, null);
};
goog.inherits(proto.GameJoinedPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GameJoinedPB.displayName = 'proto.GameJoinedPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ConfigurationPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ConfigurationPB.repeatedFields_, null);
};
goog.inherits(proto.ConfigurationPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ConfigurationPB.displayName = 'proto.ConfigurationPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ConfigGamePB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ConfigGamePB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ConfigGamePB.displayName = 'proto.ConfigGamePB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ConfigMapPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ConfigMapPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ConfigMapPB.displayName = 'proto.ConfigMapPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ConfigCharacterPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ConfigCharacterPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ConfigCharacterPB.displayName = 'proto.ConfigCharacterPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ClientConfigPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ClientConfigPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ClientConfigPB.displayName = 'proto.ClientConfigPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ConfigServerUpdatePB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ConfigServerUpdatePB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ConfigServerUpdatePB.displayName = 'proto.ConfigServerUpdatePB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ConfigSkillPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ConfigSkillPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ConfigSkillPB.displayName = 'proto.ConfigSkillPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GameStatePB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GameStatePB.repeatedFields_, null);
};
goog.inherits(proto.GameStatePB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GameStatePB.displayName = 'proto.GameStatePB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EntityPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.EntityPB.repeatedFields_, proto.EntityPB.oneofGroups_);
};
goog.inherits(proto.EntityPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.EntityPB.displayName = 'proto.EntityPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PlayerPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PlayerPB.repeatedFields_, null);
};
goog.inherits(proto.PlayerPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PlayerPB.displayName = 'proto.PlayerPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EffectPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.EffectPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.EffectPB.displayName = 'proto.EffectPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ItemPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ItemPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ItemPB.displayName = 'proto.ItemPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ProjectilePB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProjectilePB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProjectilePB.displayName = 'proto.ProjectilePB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ObstaclePB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ObstaclePB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ObstaclePB.displayName = 'proto.ObstaclePB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PowerUpPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PowerUpPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PowerUpPB.displayName = 'proto.PowerUpPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CratePB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CratePB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CratePB.displayName = 'proto.CratePB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PoolPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PoolPB.repeatedFields_, null);
};
goog.inherits(proto.PoolPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PoolPB.displayName = 'proto.PoolPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BushPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BushPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BushPB.displayName = 'proto.BushPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TrapPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TrapPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TrapPB.displayName = 'proto.TrapPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PlayerActionPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PlayerActionPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PlayerActionPB.displayName = 'proto.PlayerActionPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MovePB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MovePB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MovePB.displayName = 'proto.MovePB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AttackPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AttackPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AttackPB.displayName = 'proto.AttackPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AttackParametersPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AttackParametersPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AttackParametersPB.displayName = 'proto.AttackParametersPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UseItemPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UseItemPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UseItemPB.displayName = 'proto.UseItemPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SelectBountyPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SelectBountyPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SelectBountyPB.displayName = 'proto.SelectBountyPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ToggleZonePB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ToggleZonePB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ToggleZonePB.displayName = 'proto.ToggleZonePB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ToggleBotsPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ToggleBotsPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ToggleBotsPB.displayName = 'proto.ToggleBotsPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ChangeTickratePB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ChangeTickratePB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ChangeTickratePB.displayName = 'proto.ChangeTickratePB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GameActionPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.GameActionPB.oneofGroups_);
};
goog.inherits(proto.GameActionPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GameActionPB.displayName = 'proto.GameActionPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
<<<<<<< HEAD:apps/game_client/assets/js/serialization/messages_pb.js
proto.ZonePB = function(opt_data) {
=======
proto.Pong = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Pong, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Pong.displayName = 'proto.Pong';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Zone = function(opt_data) {
>>>>>>> main:apps/game_client/assets/js/protobuf/messages_pb.js
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ZonePB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ZonePB.displayName = 'proto.ZonePB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.KillEntryPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.KillEntryPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.KillEntryPB.displayName = 'proto.KillEntryPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BountyInfoPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BountyInfoPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BountyInfoPB.displayName = 'proto.BountyInfoPB';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CurrencyRewardPB = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CurrencyRewardPB, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CurrencyRewardPB.displayName = 'proto.CurrencyRewardPB';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DirectionPB.prototype.toObject = function(opt_includeInstance) {
  return proto.DirectionPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DirectionPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DirectionPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DirectionPB}
 */
proto.DirectionPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DirectionPB;
  return proto.DirectionPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DirectionPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DirectionPB}
 */
proto.DirectionPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setY(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DirectionPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DirectionPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DirectionPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DirectionPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional float x = 1;
 * @return {number}
 */
proto.DirectionPB.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.DirectionPB} returns this
 */
proto.DirectionPB.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y = 2;
 * @return {number}
 */
proto.DirectionPB.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.DirectionPB} returns this
 */
proto.DirectionPB.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PositionPB.prototype.toObject = function(opt_includeInstance) {
  return proto.PositionPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PositionPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PositionPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PositionPB}
 */
proto.PositionPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PositionPB;
  return proto.PositionPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PositionPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PositionPB}
 */
proto.PositionPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setY(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PositionPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PositionPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PositionPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PositionPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional float x = 1;
 * @return {number}
 */
proto.PositionPB.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.PositionPB} returns this
 */
proto.PositionPB.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y = 2;
 * @return {number}
 */
proto.PositionPB.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.PositionPB} returns this
 */
proto.PositionPB.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.LobbyEventPB.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.LobbyEventPB.EventCase = {
  EVENT_NOT_SET: 0,
  LEAVE: 1,
  LEFT: 2,
  JOINED: 3,
  GAME: 4
};

/**
 * @return {proto.LobbyEventPB.EventCase}
 */
proto.LobbyEventPB.prototype.getEventCase = function() {
  return /** @type {proto.LobbyEventPB.EventCase} */(jspb.Message.computeOneofCase(this, proto.LobbyEventPB.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LobbyEventPB.prototype.toObject = function(opt_includeInstance) {
  return proto.LobbyEventPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LobbyEventPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LobbyEventPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    leave: (f = msg.getLeave()) && proto.LeaveLobbyPB.toObject(includeInstance, f),
    left: (f = msg.getLeft()) && proto.LeftLobbyPB.toObject(includeInstance, f),
    joined: (f = msg.getJoined()) && proto.JoinedLobbyPB.toObject(includeInstance, f),
    game: (f = msg.getGame()) && proto.GameStatePB.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LobbyEventPB}
 */
proto.LobbyEventPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LobbyEventPB;
  return proto.LobbyEventPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LobbyEventPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LobbyEventPB}
 */
proto.LobbyEventPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.LeaveLobbyPB;
      reader.readMessage(value,proto.LeaveLobbyPB.deserializeBinaryFromReader);
      msg.setLeave(value);
      break;
    case 2:
      var value = new proto.LeftLobbyPB;
      reader.readMessage(value,proto.LeftLobbyPB.deserializeBinaryFromReader);
      msg.setLeft(value);
      break;
    case 3:
      var value = new proto.JoinedLobbyPB;
      reader.readMessage(value,proto.JoinedLobbyPB.deserializeBinaryFromReader);
      msg.setJoined(value);
      break;
    case 4:
      var value = new proto.GameStatePB;
      reader.readMessage(value,proto.GameStatePB.deserializeBinaryFromReader);
      msg.setGame(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LobbyEventPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LobbyEventPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LobbyEventPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LobbyEventPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeave();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.LeaveLobbyPB.serializeBinaryToWriter
    );
  }
  f = message.getLeft();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.LeftLobbyPB.serializeBinaryToWriter
    );
  }
  f = message.getJoined();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.JoinedLobbyPB.serializeBinaryToWriter
    );
  }
  f = message.getGame();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.GameStatePB.serializeBinaryToWriter
    );
  }
};


/**
 * optional LeaveLobbyPB leave = 1;
 * @return {?proto.LeaveLobbyPB}
 */
proto.LobbyEventPB.prototype.getLeave = function() {
  return /** @type{?proto.LeaveLobbyPB} */ (
    jspb.Message.getWrapperField(this, proto.LeaveLobbyPB, 1));
};


/**
 * @param {?proto.LeaveLobbyPB|undefined} value
 * @return {!proto.LobbyEventPB} returns this
*/
proto.LobbyEventPB.prototype.setLeave = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.LobbyEventPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.LobbyEventPB} returns this
 */
proto.LobbyEventPB.prototype.clearLeave = function() {
  return this.setLeave(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LobbyEventPB.prototype.hasLeave = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LeftLobbyPB left = 2;
 * @return {?proto.LeftLobbyPB}
 */
proto.LobbyEventPB.prototype.getLeft = function() {
  return /** @type{?proto.LeftLobbyPB} */ (
    jspb.Message.getWrapperField(this, proto.LeftLobbyPB, 2));
};


/**
 * @param {?proto.LeftLobbyPB|undefined} value
 * @return {!proto.LobbyEventPB} returns this
*/
proto.LobbyEventPB.prototype.setLeft = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.LobbyEventPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.LobbyEventPB} returns this
 */
proto.LobbyEventPB.prototype.clearLeft = function() {
  return this.setLeft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LobbyEventPB.prototype.hasLeft = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional JoinedLobbyPB joined = 3;
 * @return {?proto.JoinedLobbyPB}
 */
proto.LobbyEventPB.prototype.getJoined = function() {
  return /** @type{?proto.JoinedLobbyPB} */ (
    jspb.Message.getWrapperField(this, proto.JoinedLobbyPB, 3));
};


/**
 * @param {?proto.JoinedLobbyPB|undefined} value
 * @return {!proto.LobbyEventPB} returns this
*/
proto.LobbyEventPB.prototype.setJoined = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.LobbyEventPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.LobbyEventPB} returns this
 */
proto.LobbyEventPB.prototype.clearJoined = function() {
  return this.setJoined(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LobbyEventPB.prototype.hasJoined = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional GameStatePB game = 4;
 * @return {?proto.GameStatePB}
 */
proto.LobbyEventPB.prototype.getGame = function() {
  return /** @type{?proto.GameStatePB} */ (
    jspb.Message.getWrapperField(this, proto.GameStatePB, 4));
};


/**
 * @param {?proto.GameStatePB|undefined} value
 * @return {!proto.LobbyEventPB} returns this
*/
proto.LobbyEventPB.prototype.setGame = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.LobbyEventPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.LobbyEventPB} returns this
 */
proto.LobbyEventPB.prototype.clearGame = function() {
  return this.setGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LobbyEventPB.prototype.hasGame = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LeaveLobbyPB.prototype.toObject = function(opt_includeInstance) {
  return proto.LeaveLobbyPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LeaveLobbyPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LeaveLobbyPB.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LeaveLobbyPB}
 */
proto.LeaveLobbyPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LeaveLobbyPB;
  return proto.LeaveLobbyPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LeaveLobbyPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LeaveLobbyPB}
 */
proto.LeaveLobbyPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LeaveLobbyPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LeaveLobbyPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LeaveLobbyPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LeaveLobbyPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LeftLobbyPB.prototype.toObject = function(opt_includeInstance) {
  return proto.LeftLobbyPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LeftLobbyPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LeftLobbyPB.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LeftLobbyPB}
 */
proto.LeftLobbyPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LeftLobbyPB;
  return proto.LeftLobbyPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LeftLobbyPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LeftLobbyPB}
 */
proto.LeftLobbyPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LeftLobbyPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LeftLobbyPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LeftLobbyPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LeftLobbyPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoinedLobbyPB.prototype.toObject = function(opt_includeInstance) {
  return proto.JoinedLobbyPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoinedLobbyPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoinedLobbyPB.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoinedLobbyPB}
 */
proto.JoinedLobbyPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoinedLobbyPB;
  return proto.JoinedLobbyPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoinedLobbyPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoinedLobbyPB}
 */
proto.JoinedLobbyPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoinedLobbyPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoinedLobbyPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoinedLobbyPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoinedLobbyPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
<<<<<<< HEAD:apps/game_client/assets/js/serialization/messages_pb.js
proto.GameEventPB.oneofGroups_ = [[1,2,3,4,5]];
=======
proto.GameEvent.oneofGroups_ = [[1,2,3,4,5,6]];
>>>>>>> main:apps/game_client/assets/js/protobuf/messages_pb.js

/**
 * @enum {number}
 */
proto.GameEventPB.EventCase = {
  EVENT_NOT_SET: 0,
  JOINED: 1,
  UPDATE: 2,
  FINISHED: 3,
  PING_UPDATE: 4,
  TOGGLE_BOTS: 5,
  PING: 6
};

/**
 * @return {proto.GameEventPB.EventCase}
 */
proto.GameEventPB.prototype.getEventCase = function() {
  return /** @type {proto.GameEventPB.EventCase} */(jspb.Message.computeOneofCase(this, proto.GameEventPB.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GameEventPB.prototype.toObject = function(opt_includeInstance) {
  return proto.GameEventPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GameEventPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GameEventPB.toObject = function(includeInstance, msg) {
  var f, obj = {
<<<<<<< HEAD:apps/game_client/assets/js/serialization/messages_pb.js
    joined: (f = msg.getJoined()) && proto.GameJoinedPB.toObject(includeInstance, f),
    update: (f = msg.getUpdate()) && proto.GameStatePB.toObject(includeInstance, f),
    finished: (f = msg.getFinished()) && proto.GameFinishedPB.toObject(includeInstance, f),
    ping: (f = msg.getPing()) && proto.PingUpdatePB.toObject(includeInstance, f),
    toggleBots: (f = msg.getToggleBots()) && proto.ToggleBotsPB.toObject(includeInstance, f)
=======
    joined: (f = msg.getJoined()) && proto.GameJoined.toObject(includeInstance, f),
    update: (f = msg.getUpdate()) && proto.GameState.toObject(includeInstance, f),
    finished: (f = msg.getFinished()) && proto.GameFinished.toObject(includeInstance, f),
    pingUpdate: (f = msg.getPingUpdate()) && proto.PingUpdate.toObject(includeInstance, f),
    toggleBots: (f = msg.getToggleBots()) && proto.ToggleBots.toObject(includeInstance, f),
    ping: (f = msg.getPing()) && proto.Ping.toObject(includeInstance, f)
>>>>>>> main:apps/game_client/assets/js/protobuf/messages_pb.js
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GameEventPB}
 */
proto.GameEventPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GameEventPB;
  return proto.GameEventPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GameEventPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GameEventPB}
 */
proto.GameEventPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.GameJoinedPB;
      reader.readMessage(value,proto.GameJoinedPB.deserializeBinaryFromReader);
      msg.setJoined(value);
      break;
    case 2:
      var value = new proto.GameStatePB;
      reader.readMessage(value,proto.GameStatePB.deserializeBinaryFromReader);
      msg.setUpdate(value);
      break;
    case 3:
      var value = new proto.GameFinishedPB;
      reader.readMessage(value,proto.GameFinishedPB.deserializeBinaryFromReader);
      msg.setFinished(value);
      break;
    case 4:
<<<<<<< HEAD:apps/game_client/assets/js/serialization/messages_pb.js
      var value = new proto.PingUpdatePB;
      reader.readMessage(value,proto.PingUpdatePB.deserializeBinaryFromReader);
      msg.setPing(value);
=======
      var value = new proto.PingUpdate;
      reader.readMessage(value,proto.PingUpdate.deserializeBinaryFromReader);
      msg.setPingUpdate(value);
>>>>>>> main:apps/game_client/assets/js/protobuf/messages_pb.js
      break;
    case 5:
      var value = new proto.ToggleBotsPB;
      reader.readMessage(value,proto.ToggleBotsPB.deserializeBinaryFromReader);
      msg.setToggleBots(value);
      break;
    case 6:
      var value = new proto.Ping;
      reader.readMessage(value,proto.Ping.deserializeBinaryFromReader);
      msg.setPing(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GameEventPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GameEventPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GameEventPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GameEventPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJoined();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.GameJoinedPB.serializeBinaryToWriter
    );
  }
  f = message.getUpdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.GameStatePB.serializeBinaryToWriter
    );
  }
  f = message.getFinished();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.GameFinishedPB.serializeBinaryToWriter
    );
  }
  f = message.getPingUpdate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.PingUpdatePB.serializeBinaryToWriter
    );
  }
  f = message.getToggleBots();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ToggleBotsPB.serializeBinaryToWriter
    );
  }
  f = message.getPing();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.Ping.serializeBinaryToWriter
    );
  }
};


/**
 * optional GameJoinedPB joined = 1;
 * @return {?proto.GameJoinedPB}
 */
proto.GameEventPB.prototype.getJoined = function() {
  return /** @type{?proto.GameJoinedPB} */ (
    jspb.Message.getWrapperField(this, proto.GameJoinedPB, 1));
};


/**
 * @param {?proto.GameJoinedPB|undefined} value
 * @return {!proto.GameEventPB} returns this
*/
proto.GameEventPB.prototype.setJoined = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.GameEventPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GameEventPB} returns this
 */
proto.GameEventPB.prototype.clearJoined = function() {
  return this.setJoined(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GameEventPB.prototype.hasJoined = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GameStatePB update = 2;
 * @return {?proto.GameStatePB}
 */
proto.GameEventPB.prototype.getUpdate = function() {
  return /** @type{?proto.GameStatePB} */ (
    jspb.Message.getWrapperField(this, proto.GameStatePB, 2));
};


/**
 * @param {?proto.GameStatePB|undefined} value
 * @return {!proto.GameEventPB} returns this
*/
proto.GameEventPB.prototype.setUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.GameEventPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GameEventPB} returns this
 */
proto.GameEventPB.prototype.clearUpdate = function() {
  return this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GameEventPB.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GameFinishedPB finished = 3;
 * @return {?proto.GameFinishedPB}
 */
proto.GameEventPB.prototype.getFinished = function() {
  return /** @type{?proto.GameFinishedPB} */ (
    jspb.Message.getWrapperField(this, proto.GameFinishedPB, 3));
};


/**
 * @param {?proto.GameFinishedPB|undefined} value
 * @return {!proto.GameEventPB} returns this
*/
proto.GameEventPB.prototype.setFinished = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.GameEventPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GameEventPB} returns this
 */
proto.GameEventPB.prototype.clearFinished = function() {
  return this.setFinished(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GameEventPB.prototype.hasFinished = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
<<<<<<< HEAD:apps/game_client/assets/js/serialization/messages_pb.js
 * optional PingUpdatePB ping = 4;
 * @return {?proto.PingUpdatePB}
 */
proto.GameEventPB.prototype.getPing = function() {
  return /** @type{?proto.PingUpdatePB} */ (
    jspb.Message.getWrapperField(this, proto.PingUpdatePB, 4));
=======
 * optional PingUpdate ping_update = 4;
 * @return {?proto.PingUpdate}
 */
proto.GameEvent.prototype.getPingUpdate = function() {
  return /** @type{?proto.PingUpdate} */ (
    jspb.Message.getWrapperField(this, proto.PingUpdate, 4));
>>>>>>> main:apps/game_client/assets/js/protobuf/messages_pb.js
};


/**
 * @param {?proto.PingUpdatePB|undefined} value
 * @return {!proto.GameEventPB} returns this
*/
<<<<<<< HEAD:apps/game_client/assets/js/serialization/messages_pb.js
proto.GameEventPB.prototype.setPing = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.GameEventPB.oneofGroups_[0], value);
=======
proto.GameEvent.prototype.setPingUpdate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.GameEvent.oneofGroups_[0], value);
>>>>>>> main:apps/game_client/assets/js/protobuf/messages_pb.js
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GameEventPB} returns this
 */
<<<<<<< HEAD:apps/game_client/assets/js/serialization/messages_pb.js
proto.GameEventPB.prototype.clearPing = function() {
  return this.setPing(undefined);
=======
proto.GameEvent.prototype.clearPingUpdate = function() {
  return this.setPingUpdate(undefined);
>>>>>>> main:apps/game_client/assets/js/protobuf/messages_pb.js
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
<<<<<<< HEAD:apps/game_client/assets/js/serialization/messages_pb.js
proto.GameEventPB.prototype.hasPing = function() {
=======
proto.GameEvent.prototype.hasPingUpdate = function() {
>>>>>>> main:apps/game_client/assets/js/protobuf/messages_pb.js
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ToggleBotsPB toggle_bots = 5;
 * @return {?proto.ToggleBotsPB}
 */
proto.GameEventPB.prototype.getToggleBots = function() {
  return /** @type{?proto.ToggleBotsPB} */ (
    jspb.Message.getWrapperField(this, proto.ToggleBotsPB, 5));
};


/**
 * @param {?proto.ToggleBotsPB|undefined} value
 * @return {!proto.GameEventPB} returns this
*/
proto.GameEventPB.prototype.setToggleBots = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.GameEventPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GameEventPB} returns this
 */
proto.GameEventPB.prototype.clearToggleBots = function() {
  return this.setToggleBots(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GameEventPB.prototype.hasToggleBots = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Ping ping = 6;
 * @return {?proto.Ping}
 */
proto.GameEvent.prototype.getPing = function() {
  return /** @type{?proto.Ping} */ (
    jspb.Message.getWrapperField(this, proto.Ping, 6));
};


/**
 * @param {?proto.Ping|undefined} value
 * @return {!proto.GameEvent} returns this
*/
proto.GameEvent.prototype.setPing = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.GameEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GameEvent} returns this
 */
proto.GameEvent.prototype.clearPing = function() {
  return this.setPing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GameEvent.prototype.hasPing = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Ping.prototype.toObject = function(opt_includeInstance) {
  return proto.Ping.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Ping} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Ping.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestampNow: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Ping}
 */
proto.Ping.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Ping;
  return proto.Ping.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Ping} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Ping}
 */
proto.Ping.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestampNow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Ping.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Ping.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Ping} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Ping.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestampNow();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 timestamp_now = 1;
 * @return {number}
 */
proto.Ping.prototype.getTimestampNow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Ping} returns this
 */
proto.Ping.prototype.setTimestampNow = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GameFinishedPB.prototype.toObject = function(opt_includeInstance) {
  return proto.GameFinishedPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GameFinishedPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GameFinishedPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    winner: (f = msg.getWinner()) && proto.EntityPB.toObject(includeInstance, f),
    playersMap: (f = msg.getPlayersMap()) ? f.toObject(includeInstance, proto.EntityPB.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GameFinishedPB}
 */
proto.GameFinishedPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GameFinishedPB;
  return proto.GameFinishedPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GameFinishedPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GameFinishedPB}
 */
proto.GameFinishedPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.EntityPB;
      reader.readMessage(value,proto.EntityPB.deserializeBinaryFromReader);
      msg.setWinner(value);
      break;
    case 2:
      var value = msg.getPlayersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readMessage, proto.EntityPB.deserializeBinaryFromReader, 0, new proto.EntityPB());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GameFinishedPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GameFinishedPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GameFinishedPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GameFinishedPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWinner();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.EntityPB.serializeBinaryToWriter
    );
  }
  f = message.getPlayersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeMessage, proto.EntityPB.serializeBinaryToWriter);
  }
};


/**
 * optional EntityPB winner = 1;
 * @return {?proto.EntityPB}
 */
proto.GameFinishedPB.prototype.getWinner = function() {
  return /** @type{?proto.EntityPB} */ (
    jspb.Message.getWrapperField(this, proto.EntityPB, 1));
};


/**
 * @param {?proto.EntityPB|undefined} value
 * @return {!proto.GameFinishedPB} returns this
*/
proto.GameFinishedPB.prototype.setWinner = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GameFinishedPB} returns this
 */
proto.GameFinishedPB.prototype.clearWinner = function() {
  return this.setWinner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GameFinishedPB.prototype.hasWinner = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<uint64, EntityPB> players = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.EntityPB>}
 */
proto.GameFinishedPB.prototype.getPlayersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.EntityPB>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.EntityPB));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.GameFinishedPB} returns this
 */
proto.GameFinishedPB.prototype.clearPlayersMap = function() {
  this.getPlayersMap().clear();
  return this;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PingUpdatePB.prototype.toObject = function(opt_includeInstance) {
  return proto.PingUpdatePB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PingUpdatePB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PingUpdatePB.toObject = function(includeInstance, msg) {
  var f, obj = {
    latency: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PingUpdatePB}
 */
proto.PingUpdatePB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PingUpdatePB;
  return proto.PingUpdatePB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PingUpdatePB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PingUpdatePB}
 */
proto.PingUpdatePB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLatency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PingUpdatePB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PingUpdatePB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PingUpdatePB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PingUpdatePB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatency();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 latency = 1;
 * @return {number}
 */
proto.PingUpdatePB.prototype.getLatency = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PingUpdatePB} returns this
 */
proto.PingUpdatePB.prototype.setLatency = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GameJoinedPB.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GameJoinedPB.prototype.toObject = function(opt_includeInstance) {
  return proto.GameJoinedPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GameJoinedPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GameJoinedPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    playerId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    config: (f = msg.getConfig()) && proto.ConfigurationPB.toObject(includeInstance, f),
    bountiesList: jspb.Message.toObjectList(msg.getBountiesList(),
    proto.BountyInfoPB.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GameJoinedPB}
 */
proto.GameJoinedPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GameJoinedPB;
  return proto.GameJoinedPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GameJoinedPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GameJoinedPB}
 */
proto.GameJoinedPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPlayerId(value);
      break;
    case 2:
      var value = new proto.ConfigurationPB;
      reader.readMessage(value,proto.ConfigurationPB.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 3:
      var value = new proto.BountyInfoPB;
      reader.readMessage(value,proto.BountyInfoPB.deserializeBinaryFromReader);
      msg.addBounties(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GameJoinedPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GameJoinedPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GameJoinedPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GameJoinedPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayerId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ConfigurationPB.serializeBinaryToWriter
    );
  }
  f = message.getBountiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.BountyInfoPB.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 player_id = 1;
 * @return {number}
 */
proto.GameJoinedPB.prototype.getPlayerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.GameJoinedPB} returns this
 */
proto.GameJoinedPB.prototype.setPlayerId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ConfigurationPB config = 2;
 * @return {?proto.ConfigurationPB}
 */
proto.GameJoinedPB.prototype.getConfig = function() {
  return /** @type{?proto.ConfigurationPB} */ (
    jspb.Message.getWrapperField(this, proto.ConfigurationPB, 2));
};


/**
 * @param {?proto.ConfigurationPB|undefined} value
 * @return {!proto.GameJoinedPB} returns this
*/
proto.GameJoinedPB.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GameJoinedPB} returns this
 */
proto.GameJoinedPB.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GameJoinedPB.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated BountyInfoPB bounties = 3;
 * @return {!Array<!proto.BountyInfoPB>}
 */
proto.GameJoinedPB.prototype.getBountiesList = function() {
  return /** @type{!Array<!proto.BountyInfoPB>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.BountyInfoPB, 3));
};


/**
 * @param {!Array<!proto.BountyInfoPB>} value
 * @return {!proto.GameJoinedPB} returns this
*/
proto.GameJoinedPB.prototype.setBountiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.BountyInfoPB=} opt_value
 * @param {number=} opt_index
 * @return {!proto.BountyInfoPB}
 */
proto.GameJoinedPB.prototype.addBounties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.BountyInfoPB, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.GameJoinedPB} returns this
 */
proto.GameJoinedPB.prototype.clearBountiesList = function() {
  return this.setBountiesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ConfigurationPB.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ConfigurationPB.prototype.toObject = function(opt_includeInstance) {
  return proto.ConfigurationPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ConfigurationPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConfigurationPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    game: (f = msg.getGame()) && proto.ConfigGamePB.toObject(includeInstance, f),
    map: (f = msg.getMap()) && proto.ConfigMapPB.toObject(includeInstance, f),
    charactersList: jspb.Message.toObjectList(msg.getCharactersList(),
    proto.ConfigCharacterPB.toObject, includeInstance),
    clientConfig: (f = msg.getClientConfig()) && proto.ClientConfigPB.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ConfigurationPB}
 */
proto.ConfigurationPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ConfigurationPB;
  return proto.ConfigurationPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ConfigurationPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ConfigurationPB}
 */
proto.ConfigurationPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ConfigGamePB;
      reader.readMessage(value,proto.ConfigGamePB.deserializeBinaryFromReader);
      msg.setGame(value);
      break;
    case 2:
      var value = new proto.ConfigMapPB;
      reader.readMessage(value,proto.ConfigMapPB.deserializeBinaryFromReader);
      msg.setMap(value);
      break;
    case 3:
      var value = new proto.ConfigCharacterPB;
      reader.readMessage(value,proto.ConfigCharacterPB.deserializeBinaryFromReader);
      msg.addCharacters(value);
      break;
    case 4:
      var value = new proto.ClientConfigPB;
      reader.readMessage(value,proto.ClientConfigPB.deserializeBinaryFromReader);
      msg.setClientConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ConfigurationPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ConfigurationPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ConfigurationPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConfigurationPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGame();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ConfigGamePB.serializeBinaryToWriter
    );
  }
  f = message.getMap();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ConfigMapPB.serializeBinaryToWriter
    );
  }
  f = message.getCharactersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ConfigCharacterPB.serializeBinaryToWriter
    );
  }
  f = message.getClientConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ClientConfigPB.serializeBinaryToWriter
    );
  }
};


/**
 * optional ConfigGamePB game = 1;
 * @return {?proto.ConfigGamePB}
 */
proto.ConfigurationPB.prototype.getGame = function() {
  return /** @type{?proto.ConfigGamePB} */ (
    jspb.Message.getWrapperField(this, proto.ConfigGamePB, 1));
};


/**
 * @param {?proto.ConfigGamePB|undefined} value
 * @return {!proto.ConfigurationPB} returns this
*/
proto.ConfigurationPB.prototype.setGame = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ConfigurationPB} returns this
 */
proto.ConfigurationPB.prototype.clearGame = function() {
  return this.setGame(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ConfigurationPB.prototype.hasGame = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ConfigMapPB map = 2;
 * @return {?proto.ConfigMapPB}
 */
proto.ConfigurationPB.prototype.getMap = function() {
  return /** @type{?proto.ConfigMapPB} */ (
    jspb.Message.getWrapperField(this, proto.ConfigMapPB, 2));
};


/**
 * @param {?proto.ConfigMapPB|undefined} value
 * @return {!proto.ConfigurationPB} returns this
*/
proto.ConfigurationPB.prototype.setMap = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ConfigurationPB} returns this
 */
proto.ConfigurationPB.prototype.clearMap = function() {
  return this.setMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ConfigurationPB.prototype.hasMap = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated ConfigCharacterPB characters = 3;
 * @return {!Array<!proto.ConfigCharacterPB>}
 */
proto.ConfigurationPB.prototype.getCharactersList = function() {
  return /** @type{!Array<!proto.ConfigCharacterPB>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ConfigCharacterPB, 3));
};


/**
 * @param {!Array<!proto.ConfigCharacterPB>} value
 * @return {!proto.ConfigurationPB} returns this
*/
proto.ConfigurationPB.prototype.setCharactersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ConfigCharacterPB=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ConfigCharacterPB}
 */
proto.ConfigurationPB.prototype.addCharacters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ConfigCharacterPB, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ConfigurationPB} returns this
 */
proto.ConfigurationPB.prototype.clearCharactersList = function() {
  return this.setCharactersList([]);
};


/**
 * optional ClientConfigPB client_config = 4;
 * @return {?proto.ClientConfigPB}
 */
proto.ConfigurationPB.prototype.getClientConfig = function() {
  return /** @type{?proto.ClientConfigPB} */ (
    jspb.Message.getWrapperField(this, proto.ClientConfigPB, 4));
};


/**
 * @param {?proto.ClientConfigPB|undefined} value
 * @return {!proto.ConfigurationPB} returns this
*/
proto.ConfigurationPB.prototype.setClientConfig = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ConfigurationPB} returns this
 */
proto.ConfigurationPB.prototype.clearClientConfig = function() {
  return this.setClientConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ConfigurationPB.prototype.hasClientConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ConfigGamePB.prototype.toObject = function(opt_includeInstance) {
  return proto.ConfigGamePB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ConfigGamePB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConfigGamePB.toObject = function(includeInstance, msg) {
  var f, obj = {
    tickRateMs: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    bountyPickTimeMs: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    startGameTimeMs: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ConfigGamePB}
 */
proto.ConfigGamePB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ConfigGamePB;
  return proto.ConfigGamePB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ConfigGamePB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ConfigGamePB}
 */
proto.ConfigGamePB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTickRateMs(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBountyPickTimeMs(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setStartGameTimeMs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ConfigGamePB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ConfigGamePB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ConfigGamePB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConfigGamePB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTickRateMs();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getBountyPickTimeMs();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getStartGameTimeMs();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float tick_rate_ms = 1;
 * @return {number}
 */
proto.ConfigGamePB.prototype.getTickRateMs = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ConfigGamePB} returns this
 */
proto.ConfigGamePB.prototype.setTickRateMs = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float bounty_pick_time_ms = 2;
 * @return {number}
 */
proto.ConfigGamePB.prototype.getBountyPickTimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ConfigGamePB} returns this
 */
proto.ConfigGamePB.prototype.setBountyPickTimeMs = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float start_game_time_ms = 3;
 * @return {number}
 */
proto.ConfigGamePB.prototype.getStartGameTimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ConfigGamePB} returns this
 */
proto.ConfigGamePB.prototype.setStartGameTimeMs = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ConfigMapPB.prototype.toObject = function(opt_includeInstance) {
  return proto.ConfigMapPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ConfigMapPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConfigMapPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    radius: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ConfigMapPB}
 */
proto.ConfigMapPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ConfigMapPB;
  return proto.ConfigMapPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ConfigMapPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ConfigMapPB}
 */
proto.ConfigMapPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRadius(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ConfigMapPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ConfigMapPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ConfigMapPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConfigMapPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRadius();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
};


/**
 * optional float radius = 1;
 * @return {number}
 */
proto.ConfigMapPB.prototype.getRadius = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ConfigMapPB} returns this
 */
proto.ConfigMapPB.prototype.setRadius = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ConfigCharacterPB.prototype.toObject = function(opt_includeInstance) {
  return proto.ConfigCharacterPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ConfigCharacterPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConfigCharacterPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    active: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    baseSpeed: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    baseSize: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    baseHealth: jspb.Message.getFieldWithDefault(msg, 5, 0),
    maxInventorySize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    skillsMap: (f = msg.getSkillsMap()) ? f.toObject(includeInstance, proto.ConfigSkillPB.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ConfigCharacterPB}
 */
proto.ConfigCharacterPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ConfigCharacterPB;
  return proto.ConfigCharacterPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ConfigCharacterPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ConfigCharacterPB}
 */
proto.ConfigCharacterPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBaseSpeed(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBaseSize(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBaseHealth(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxInventorySize(value);
      break;
    case 7:
      var value = msg.getSkillsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.ConfigSkillPB.deserializeBinaryFromReader, "", new proto.ConfigSkillPB());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ConfigCharacterPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ConfigCharacterPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ConfigCharacterPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConfigCharacterPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getActive();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getBaseSpeed();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getBaseSize();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getBaseHealth();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getMaxInventorySize();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getSkillsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.ConfigSkillPB.serializeBinaryToWriter);
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ConfigCharacterPB.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ConfigCharacterPB} returns this
 */
proto.ConfigCharacterPB.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool active = 2;
 * @return {boolean}
 */
proto.ConfigCharacterPB.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ConfigCharacterPB} returns this
 */
proto.ConfigCharacterPB.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional float base_speed = 3;
 * @return {number}
 */
proto.ConfigCharacterPB.prototype.getBaseSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ConfigCharacterPB} returns this
 */
proto.ConfigCharacterPB.prototype.setBaseSpeed = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float base_size = 4;
 * @return {number}
 */
proto.ConfigCharacterPB.prototype.getBaseSize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ConfigCharacterPB} returns this
 */
proto.ConfigCharacterPB.prototype.setBaseSize = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional uint64 base_health = 5;
 * @return {number}
 */
proto.ConfigCharacterPB.prototype.getBaseHealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ConfigCharacterPB} returns this
 */
proto.ConfigCharacterPB.prototype.setBaseHealth = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 max_inventory_size = 6;
 * @return {number}
 */
proto.ConfigCharacterPB.prototype.getMaxInventorySize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ConfigCharacterPB} returns this
 */
proto.ConfigCharacterPB.prototype.setMaxInventorySize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * map<string, ConfigSkillPB> skills = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.ConfigSkillPB>}
 */
proto.ConfigCharacterPB.prototype.getSkillsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.ConfigSkillPB>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      proto.ConfigSkillPB));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ConfigCharacterPB} returns this
 */
proto.ConfigCharacterPB.prototype.clearSkillsMap = function() {
  this.getSkillsMap().clear();
  return this;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ClientConfigPB.prototype.toObject = function(opt_includeInstance) {
  return proto.ClientConfigPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ClientConfigPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClientConfigPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverUpdate: (f = msg.getServerUpdate()) && proto.ConfigServerUpdatePB.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ClientConfigPB}
 */
proto.ClientConfigPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ClientConfigPB;
  return proto.ClientConfigPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClientConfigPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClientConfigPB}
 */
proto.ClientConfigPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ConfigServerUpdatePB;
      reader.readMessage(value,proto.ConfigServerUpdatePB.deserializeBinaryFromReader);
      msg.setServerUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ClientConfigPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ClientConfigPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ClientConfigPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClientConfigPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServerUpdate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ConfigServerUpdatePB.serializeBinaryToWriter
    );
  }
};


/**
 * optional ConfigServerUpdatePB server_update = 1;
 * @return {?proto.ConfigServerUpdatePB}
 */
proto.ClientConfigPB.prototype.getServerUpdate = function() {
  return /** @type{?proto.ConfigServerUpdatePB} */ (
    jspb.Message.getWrapperField(this, proto.ConfigServerUpdatePB, 1));
};


/**
 * @param {?proto.ConfigServerUpdatePB|undefined} value
 * @return {!proto.ClientConfigPB} returns this
*/
proto.ClientConfigPB.prototype.setServerUpdate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ClientConfigPB} returns this
 */
proto.ClientConfigPB.prototype.clearServerUpdate = function() {
  return this.setServerUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ClientConfigPB.prototype.hasServerUpdate = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ConfigServerUpdatePB.prototype.toObject = function(opt_includeInstance) {
  return proto.ConfigServerUpdatePB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ConfigServerUpdatePB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConfigServerUpdatePB.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestampDifferenceSamplesToCheckWarning: jspb.Message.getFieldWithDefault(msg, 1, 0),
    timestampDifferencesSamplesMaxLength: jspb.Message.getFieldWithDefault(msg, 2, 0),
    showWarningThreshold: jspb.Message.getFieldWithDefault(msg, 3, 0),
    stopWarningThreshold: jspb.Message.getFieldWithDefault(msg, 4, 0),
    msWithoutUpdateShowWarning: jspb.Message.getFieldWithDefault(msg, 5, 0),
    msWithoutUpdateDisconnect: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ConfigServerUpdatePB}
 */
proto.ConfigServerUpdatePB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ConfigServerUpdatePB;
  return proto.ConfigServerUpdatePB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ConfigServerUpdatePB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ConfigServerUpdatePB}
 */
proto.ConfigServerUpdatePB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestampDifferenceSamplesToCheckWarning(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestampDifferencesSamplesMaxLength(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setShowWarningThreshold(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStopWarningThreshold(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMsWithoutUpdateShowWarning(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMsWithoutUpdateDisconnect(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ConfigServerUpdatePB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ConfigServerUpdatePB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ConfigServerUpdatePB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConfigServerUpdatePB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestampDifferenceSamplesToCheckWarning();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getTimestampDifferencesSamplesMaxLength();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getShowWarningThreshold();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getStopWarningThreshold();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getMsWithoutUpdateShowWarning();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getMsWithoutUpdateDisconnect();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * optional uint64 timestamp_difference_samples_to_check_warning = 1;
 * @return {number}
 */
proto.ConfigServerUpdatePB.prototype.getTimestampDifferenceSamplesToCheckWarning = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ConfigServerUpdatePB} returns this
 */
proto.ConfigServerUpdatePB.prototype.setTimestampDifferenceSamplesToCheckWarning = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 timestamp_differences_samples_max_length = 2;
 * @return {number}
 */
proto.ConfigServerUpdatePB.prototype.getTimestampDifferencesSamplesMaxLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ConfigServerUpdatePB} returns this
 */
proto.ConfigServerUpdatePB.prototype.setTimestampDifferencesSamplesMaxLength = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 show_warning_threshold = 3;
 * @return {number}
 */
proto.ConfigServerUpdatePB.prototype.getShowWarningThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ConfigServerUpdatePB} returns this
 */
proto.ConfigServerUpdatePB.prototype.setShowWarningThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 stop_warning_threshold = 4;
 * @return {number}
 */
proto.ConfigServerUpdatePB.prototype.getStopWarningThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ConfigServerUpdatePB} returns this
 */
proto.ConfigServerUpdatePB.prototype.setStopWarningThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 ms_without_update_show_warning = 5;
 * @return {number}
 */
proto.ConfigServerUpdatePB.prototype.getMsWithoutUpdateShowWarning = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ConfigServerUpdatePB} returns this
 */
proto.ConfigServerUpdatePB.prototype.setMsWithoutUpdateShowWarning = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 ms_without_update_disconnect = 6;
 * @return {number}
 */
proto.ConfigServerUpdatePB.prototype.getMsWithoutUpdateDisconnect = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ConfigServerUpdatePB} returns this
 */
proto.ConfigServerUpdatePB.prototype.setMsWithoutUpdateDisconnect = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ConfigSkillPB.prototype.toObject = function(opt_includeInstance) {
  return proto.ConfigSkillPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ConfigSkillPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConfigSkillPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cooldownMs: jspb.Message.getFieldWithDefault(msg, 2, 0),
    executionDurationMs: jspb.Message.getFieldWithDefault(msg, 3, 0),
    targettingRadius: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    targettingAngle: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    targettingRange: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    staminaCost: jspb.Message.getFieldWithDefault(msg, 7, 0),
    targettingOffset: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ConfigSkillPB}
 */
proto.ConfigSkillPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ConfigSkillPB;
  return proto.ConfigSkillPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ConfigSkillPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ConfigSkillPB}
 */
proto.ConfigSkillPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCooldownMs(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setExecutionDurationMs(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTargettingRadius(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTargettingAngle(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTargettingRange(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStaminaCost(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTargettingOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ConfigSkillPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ConfigSkillPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ConfigSkillPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConfigSkillPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCooldownMs();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getExecutionDurationMs();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getTargettingRadius();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getTargettingAngle();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getTargettingRange();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getStaminaCost();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getTargettingOffset();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ConfigSkillPB.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ConfigSkillPB} returns this
 */
proto.ConfigSkillPB.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 cooldown_ms = 2;
 * @return {number}
 */
proto.ConfigSkillPB.prototype.getCooldownMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ConfigSkillPB} returns this
 */
proto.ConfigSkillPB.prototype.setCooldownMs = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 execution_duration_ms = 3;
 * @return {number}
 */
proto.ConfigSkillPB.prototype.getExecutionDurationMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ConfigSkillPB} returns this
 */
proto.ConfigSkillPB.prototype.setExecutionDurationMs = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional float targetting_radius = 4;
 * @return {number}
 */
proto.ConfigSkillPB.prototype.getTargettingRadius = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ConfigSkillPB} returns this
 */
proto.ConfigSkillPB.prototype.setTargettingRadius = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float targetting_angle = 5;
 * @return {number}
 */
proto.ConfigSkillPB.prototype.getTargettingAngle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ConfigSkillPB} returns this
 */
proto.ConfigSkillPB.prototype.setTargettingAngle = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float targetting_range = 6;
 * @return {number}
 */
proto.ConfigSkillPB.prototype.getTargettingRange = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ConfigSkillPB} returns this
 */
proto.ConfigSkillPB.prototype.setTargettingRange = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional uint64 stamina_cost = 7;
 * @return {number}
 */
proto.ConfigSkillPB.prototype.getStaminaCost = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ConfigSkillPB} returns this
 */
proto.ConfigSkillPB.prototype.setStaminaCost = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional float targetting_offset = 8;
 * @return {number}
 */
proto.ConfigSkillPB.prototype.getTargettingOffset = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ConfigSkillPB} returns this
 */
proto.ConfigSkillPB.prototype.setTargettingOffset = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GameStatePB.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GameStatePB.prototype.toObject = function(opt_includeInstance) {
  return proto.GameStatePB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GameStatePB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GameStatePB.toObject = function(includeInstance, msg) {
  var f, obj = {
    gameId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playersMap: (f = msg.getPlayersMap()) ? f.toObject(includeInstance, proto.EntityPB.toObject) : [],
    projectilesMap: (f = msg.getProjectilesMap()) ? f.toObject(includeInstance, proto.EntityPB.toObject) : [],
    playerTimestampsMap: (f = msg.getPlayerTimestampsMap()) ? f.toObject(includeInstance, undefined) : [],
    serverTimestamp: jspb.Message.getFieldWithDefault(msg, 5, 0),
    zone: (f = msg.getZone()) && proto.ZonePB.toObject(includeInstance, f),
    killfeedList: jspb.Message.toObjectList(msg.getKillfeedList(),
    proto.KillEntryPB.toObject, includeInstance),
    damageTakenMap: (f = msg.getDamageTakenMap()) ? f.toObject(includeInstance, undefined) : [],
    damageDoneMap: (f = msg.getDamageDoneMap()) ? f.toObject(includeInstance, undefined) : [],
    powerUpsMap: (f = msg.getPowerUpsMap()) ? f.toObject(includeInstance, proto.EntityPB.toObject) : [],
    status: jspb.Message.getFieldWithDefault(msg, 11, 0),
    startGameTimestamp: jspb.Message.getFieldWithDefault(msg, 12, 0),
    itemsMap: (f = msg.getItemsMap()) ? f.toObject(includeInstance, proto.EntityPB.toObject) : [],
    obstaclesMap: (f = msg.getObstaclesMap()) ? f.toObject(includeInstance, proto.EntityPB.toObject) : [],
    poolsMap: (f = msg.getPoolsMap()) ? f.toObject(includeInstance, proto.EntityPB.toObject) : [],
    cratesMap: (f = msg.getCratesMap()) ? f.toObject(includeInstance, proto.EntityPB.toObject) : [],
    bushesMap: (f = msg.getBushesMap()) ? f.toObject(includeInstance, proto.EntityPB.toObject) : [],
    trapsMap: (f = msg.getTrapsMap()) ? f.toObject(includeInstance, proto.EntityPB.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GameStatePB}
 */
proto.GameStatePB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GameStatePB;
  return proto.GameStatePB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GameStatePB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GameStatePB}
 */
proto.GameStatePB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGameId(value);
      break;
    case 2:
      var value = msg.getPlayersMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readMessage, proto.EntityPB.deserializeBinaryFromReader, 0, new proto.EntityPB());
         });
      break;
    case 3:
      var value = msg.getProjectilesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readMessage, proto.EntityPB.deserializeBinaryFromReader, 0, new proto.EntityPB());
         });
      break;
    case 4:
      var value = msg.getPlayerTimestampsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readInt64, null, 0, 0);
         });
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setServerTimestamp(value);
      break;
    case 6:
      var value = new proto.ZonePB;
      reader.readMessage(value,proto.ZonePB.deserializeBinaryFromReader);
      msg.setZone(value);
      break;
    case 7:
      var value = new proto.KillEntryPB;
      reader.readMessage(value,proto.KillEntryPB.deserializeBinaryFromReader);
      msg.addKillfeed(value);
      break;
    case 8:
      var value = msg.getDamageTakenMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readUint64, null, 0, 0);
         });
      break;
    case 9:
      var value = msg.getDamageDoneMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readUint64, null, 0, 0);
         });
      break;
    case 10:
      var value = msg.getPowerUpsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readMessage, proto.EntityPB.deserializeBinaryFromReader, 0, new proto.EntityPB());
         });
      break;
    case 11:
      var value = /** @type {!proto.GameStatusPB} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartGameTimestamp(value);
      break;
    case 13:
      var value = msg.getItemsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readMessage, proto.EntityPB.deserializeBinaryFromReader, 0, new proto.EntityPB());
         });
      break;
    case 14:
      var value = msg.getObstaclesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readMessage, proto.EntityPB.deserializeBinaryFromReader, 0, new proto.EntityPB());
         });
      break;
    case 15:
      var value = msg.getPoolsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readMessage, proto.EntityPB.deserializeBinaryFromReader, 0, new proto.EntityPB());
         });
      break;
    case 16:
      var value = msg.getCratesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readMessage, proto.EntityPB.deserializeBinaryFromReader, 0, new proto.EntityPB());
         });
      break;
    case 17:
      var value = msg.getBushesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readMessage, proto.EntityPB.deserializeBinaryFromReader, 0, new proto.EntityPB());
         });
      break;
    case 18:
      var value = msg.getTrapsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readUint64, jspb.BinaryReader.prototype.readMessage, proto.EntityPB.deserializeBinaryFromReader, 0, new proto.EntityPB());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GameStatePB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GameStatePB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GameStatePB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GameStatePB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGameId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlayersMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeMessage, proto.EntityPB.serializeBinaryToWriter);
  }
  f = message.getProjectilesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeMessage, proto.EntityPB.serializeBinaryToWriter);
  }
  f = message.getPlayerTimestampsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeInt64);
  }
  f = message.getServerTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getZone();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ZonePB.serializeBinaryToWriter
    );
  }
  f = message.getKillfeedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.KillEntryPB.serializeBinaryToWriter
    );
  }
  f = message.getDamageTakenMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeUint64);
  }
  f = message.getDamageDoneMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(9, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeUint64);
  }
  f = message.getPowerUpsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeMessage, proto.EntityPB.serializeBinaryToWriter);
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getStartGameTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getItemsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(13, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeMessage, proto.EntityPB.serializeBinaryToWriter);
  }
  f = message.getObstaclesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(14, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeMessage, proto.EntityPB.serializeBinaryToWriter);
  }
  f = message.getPoolsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(15, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeMessage, proto.EntityPB.serializeBinaryToWriter);
  }
  f = message.getCratesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(16, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeMessage, proto.EntityPB.serializeBinaryToWriter);
  }
  f = message.getBushesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(17, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeMessage, proto.EntityPB.serializeBinaryToWriter);
  }
  f = message.getTrapsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(18, writer, jspb.BinaryWriter.prototype.writeUint64, jspb.BinaryWriter.prototype.writeMessage, proto.EntityPB.serializeBinaryToWriter);
  }
};


/**
 * optional string game_id = 1;
 * @return {string}
 */
proto.GameStatePB.prototype.getGameId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GameStatePB} returns this
 */
proto.GameStatePB.prototype.setGameId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<uint64, EntityPB> players = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.EntityPB>}
 */
proto.GameStatePB.prototype.getPlayersMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.EntityPB>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.EntityPB));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.GameStatePB} returns this
 */
proto.GameStatePB.prototype.clearPlayersMap = function() {
  this.getPlayersMap().clear();
  return this;
};


/**
 * map<uint64, EntityPB> projectiles = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.EntityPB>}
 */
proto.GameStatePB.prototype.getProjectilesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.EntityPB>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.EntityPB));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.GameStatePB} returns this
 */
proto.GameStatePB.prototype.clearProjectilesMap = function() {
  this.getProjectilesMap().clear();
  return this;
};


/**
 * map<uint64, int64> player_timestamps = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.GameStatePB.prototype.getPlayerTimestampsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.GameStatePB} returns this
 */
proto.GameStatePB.prototype.clearPlayerTimestampsMap = function() {
  this.getPlayerTimestampsMap().clear();
  return this;
};


/**
 * optional int64 server_timestamp = 5;
 * @return {number}
 */
proto.GameStatePB.prototype.getServerTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.GameStatePB} returns this
 */
proto.GameStatePB.prototype.setServerTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional ZonePB zone = 6;
 * @return {?proto.ZonePB}
 */
proto.GameStatePB.prototype.getZone = function() {
  return /** @type{?proto.ZonePB} */ (
    jspb.Message.getWrapperField(this, proto.ZonePB, 6));
};


/**
 * @param {?proto.ZonePB|undefined} value
 * @return {!proto.GameStatePB} returns this
*/
proto.GameStatePB.prototype.setZone = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GameStatePB} returns this
 */
proto.GameStatePB.prototype.clearZone = function() {
  return this.setZone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GameStatePB.prototype.hasZone = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated KillEntryPB killfeed = 7;
 * @return {!Array<!proto.KillEntryPB>}
 */
proto.GameStatePB.prototype.getKillfeedList = function() {
  return /** @type{!Array<!proto.KillEntryPB>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.KillEntryPB, 7));
};


/**
 * @param {!Array<!proto.KillEntryPB>} value
 * @return {!proto.GameStatePB} returns this
*/
proto.GameStatePB.prototype.setKillfeedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.KillEntryPB=} opt_value
 * @param {number=} opt_index
 * @return {!proto.KillEntryPB}
 */
proto.GameStatePB.prototype.addKillfeed = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.KillEntryPB, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.GameStatePB} returns this
 */
proto.GameStatePB.prototype.clearKillfeedList = function() {
  return this.setKillfeedList([]);
};


/**
 * map<uint64, uint64> damage_taken = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.GameStatePB.prototype.getDamageTakenMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.GameStatePB} returns this
 */
proto.GameStatePB.prototype.clearDamageTakenMap = function() {
  this.getDamageTakenMap().clear();
  return this;
};


/**
 * map<uint64, uint64> damage_done = 9;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,number>}
 */
proto.GameStatePB.prototype.getDamageDoneMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,number>} */ (
      jspb.Message.getMapField(this, 9, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.GameStatePB} returns this
 */
proto.GameStatePB.prototype.clearDamageDoneMap = function() {
  this.getDamageDoneMap().clear();
  return this;
};


/**
 * map<uint64, EntityPB> power_ups = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.EntityPB>}
 */
proto.GameStatePB.prototype.getPowerUpsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.EntityPB>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      proto.EntityPB));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.GameStatePB} returns this
 */
proto.GameStatePB.prototype.clearPowerUpsMap = function() {
  this.getPowerUpsMap().clear();
  return this;
};


/**
 * optional GameStatusPB status = 11;
 * @return {!proto.GameStatusPB}
 */
proto.GameStatePB.prototype.getStatus = function() {
  return /** @type {!proto.GameStatusPB} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.GameStatusPB} value
 * @return {!proto.GameStatePB} returns this
 */
proto.GameStatePB.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional int64 start_game_timestamp = 12;
 * @return {number}
 */
proto.GameStatePB.prototype.getStartGameTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.GameStatePB} returns this
 */
proto.GameStatePB.prototype.setStartGameTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * map<uint64, EntityPB> items = 13;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.EntityPB>}
 */
proto.GameStatePB.prototype.getItemsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.EntityPB>} */ (
      jspb.Message.getMapField(this, 13, opt_noLazyCreate,
      proto.EntityPB));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.GameStatePB} returns this
 */
proto.GameStatePB.prototype.clearItemsMap = function() {
  this.getItemsMap().clear();
  return this;
};


/**
 * map<uint64, EntityPB> obstacles = 14;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.EntityPB>}
 */
proto.GameStatePB.prototype.getObstaclesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.EntityPB>} */ (
      jspb.Message.getMapField(this, 14, opt_noLazyCreate,
      proto.EntityPB));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.GameStatePB} returns this
 */
proto.GameStatePB.prototype.clearObstaclesMap = function() {
  this.getObstaclesMap().clear();
  return this;
};


/**
 * map<uint64, EntityPB> pools = 15;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.EntityPB>}
 */
proto.GameStatePB.prototype.getPoolsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.EntityPB>} */ (
      jspb.Message.getMapField(this, 15, opt_noLazyCreate,
      proto.EntityPB));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.GameStatePB} returns this
 */
proto.GameStatePB.prototype.clearPoolsMap = function() {
  this.getPoolsMap().clear();
  return this;
};


/**
 * map<uint64, EntityPB> crates = 16;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.EntityPB>}
 */
proto.GameStatePB.prototype.getCratesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.EntityPB>} */ (
      jspb.Message.getMapField(this, 16, opt_noLazyCreate,
      proto.EntityPB));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.GameStatePB} returns this
 */
proto.GameStatePB.prototype.clearCratesMap = function() {
  this.getCratesMap().clear();
  return this;
};


/**
 * map<uint64, EntityPB> bushes = 17;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.EntityPB>}
 */
proto.GameStatePB.prototype.getBushesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.EntityPB>} */ (
      jspb.Message.getMapField(this, 17, opt_noLazyCreate,
      proto.EntityPB));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.GameStatePB} returns this
 */
proto.GameStatePB.prototype.clearBushesMap = function() {
  this.getBushesMap().clear();
  return this;
};


/**
 * map<uint64, EntityPB> traps = 18;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.EntityPB>}
 */
proto.GameStatePB.prototype.getTrapsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.EntityPB>} */ (
      jspb.Message.getMapField(this, 18, opt_noLazyCreate,
      proto.EntityPB));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.GameStatePB} returns this
 */
proto.GameStatePB.prototype.clearTrapsMap = function() {
  this.getTrapsMap().clear();
  return this;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.EntityPB.repeatedFields_ = [7,8];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.EntityPB.oneofGroups_ = [[12,13,14,15,16,17,18,19,20]];

/**
 * @enum {number}
 */
proto.EntityPB.AditionalInfoCase = {
  ADITIONAL_INFO_NOT_SET: 0,
  PLAYER: 12,
  PROJECTILE: 13,
  OBSTACLE: 14,
  POWER_UP: 15,
  ITEM: 16,
  POOL: 17,
  CRATE: 18,
  BUSH: 19,
  TRAP: 20
};

/**
 * @return {proto.EntityPB.AditionalInfoCase}
 */
proto.EntityPB.prototype.getAditionalInfoCase = function() {
  return /** @type {proto.EntityPB.AditionalInfoCase} */(jspb.Message.computeOneofCase(this, proto.EntityPB.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EntityPB.prototype.toObject = function(opt_includeInstance) {
  return proto.EntityPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EntityPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EntityPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    category: jspb.Message.getFieldWithDefault(msg, 2, ""),
    shape: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    position: (f = msg.getPosition()) && proto.PositionPB.toObject(includeInstance, f),
    radius: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    verticesList: jspb.Message.toObjectList(msg.getVerticesList(),
    proto.PositionPB.toObject, includeInstance),
    collidesWithList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    speed: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    direction: (f = msg.getDirection()) && proto.DirectionPB.toObject(includeInstance, f),
    isMoving: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    player: (f = msg.getPlayer()) && proto.PlayerPB.toObject(includeInstance, f),
    projectile: (f = msg.getProjectile()) && proto.ProjectilePB.toObject(includeInstance, f),
    obstacle: (f = msg.getObstacle()) && proto.ObstaclePB.toObject(includeInstance, f),
    powerUp: (f = msg.getPowerUp()) && proto.PowerUpPB.toObject(includeInstance, f),
    item: (f = msg.getItem()) && proto.ItemPB.toObject(includeInstance, f),
    pool: (f = msg.getPool()) && proto.PoolPB.toObject(includeInstance, f),
    crate: (f = msg.getCrate()) && proto.CratePB.toObject(includeInstance, f),
    bush: (f = msg.getBush()) && proto.BushPB.toObject(includeInstance, f),
    trap: (f = msg.getTrap()) && proto.TrapPB.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EntityPB}
 */
proto.EntityPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EntityPB;
  return proto.EntityPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EntityPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EntityPB}
 */
proto.EntityPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setShape(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = new proto.PositionPB;
      reader.readMessage(value,proto.PositionPB.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRadius(value);
      break;
    case 7:
      var value = new proto.PositionPB;
      reader.readMessage(value,proto.PositionPB.deserializeBinaryFromReader);
      msg.addVertices(value);
      break;
    case 8:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addCollidesWith(values[i]);
      }
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSpeed(value);
      break;
    case 10:
      var value = new proto.DirectionPB;
      reader.readMessage(value,proto.DirectionPB.deserializeBinaryFromReader);
      msg.setDirection(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsMoving(value);
      break;
    case 12:
      var value = new proto.PlayerPB;
      reader.readMessage(value,proto.PlayerPB.deserializeBinaryFromReader);
      msg.setPlayer(value);
      break;
    case 13:
      var value = new proto.ProjectilePB;
      reader.readMessage(value,proto.ProjectilePB.deserializeBinaryFromReader);
      msg.setProjectile(value);
      break;
    case 14:
      var value = new proto.ObstaclePB;
      reader.readMessage(value,proto.ObstaclePB.deserializeBinaryFromReader);
      msg.setObstacle(value);
      break;
    case 15:
      var value = new proto.PowerUpPB;
      reader.readMessage(value,proto.PowerUpPB.deserializeBinaryFromReader);
      msg.setPowerUp(value);
      break;
    case 16:
      var value = new proto.ItemPB;
      reader.readMessage(value,proto.ItemPB.deserializeBinaryFromReader);
      msg.setItem(value);
      break;
    case 17:
      var value = new proto.PoolPB;
      reader.readMessage(value,proto.PoolPB.deserializeBinaryFromReader);
      msg.setPool(value);
      break;
    case 18:
      var value = new proto.CratePB;
      reader.readMessage(value,proto.CratePB.deserializeBinaryFromReader);
      msg.setCrate(value);
      break;
    case 19:
      var value = new proto.BushPB;
      reader.readMessage(value,proto.BushPB.deserializeBinaryFromReader);
      msg.setBush(value);
      break;
    case 20:
      var value = new proto.TrapPB;
      reader.readMessage(value,proto.TrapPB.deserializeBinaryFromReader);
      msg.setTrap(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EntityPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.EntityPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.EntityPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EntityPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getShape();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.PositionPB.serializeBinaryToWriter
    );
  }
  f = message.getRadius();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getVerticesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.PositionPB.serializeBinaryToWriter
    );
  }
  f = message.getCollidesWithList();
  if (f.length > 0) {
    writer.writePackedUint64(
      8,
      f
    );
  }
  f = message.getSpeed();
  if (f !== 0.0) {
    writer.writeFloat(
      9,
      f
    );
  }
  f = message.getDirection();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.DirectionPB.serializeBinaryToWriter
    );
  }
  f = message.getIsMoving();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getPlayer();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.PlayerPB.serializeBinaryToWriter
    );
  }
  f = message.getProjectile();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.ProjectilePB.serializeBinaryToWriter
    );
  }
  f = message.getObstacle();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.ObstaclePB.serializeBinaryToWriter
    );
  }
  f = message.getPowerUp();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.PowerUpPB.serializeBinaryToWriter
    );
  }
  f = message.getItem();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.ItemPB.serializeBinaryToWriter
    );
  }
  f = message.getPool();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.PoolPB.serializeBinaryToWriter
    );
  }
  f = message.getCrate();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.CratePB.serializeBinaryToWriter
    );
  }
  f = message.getBush();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.BushPB.serializeBinaryToWriter
    );
  }
  f = message.getTrap();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.TrapPB.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.EntityPB.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string category = 2;
 * @return {string}
 */
proto.EntityPB.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string shape = 3;
 * @return {string}
 */
proto.EntityPB.prototype.getShape = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.setShape = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.EntityPB.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional PositionPB position = 5;
 * @return {?proto.PositionPB}
 */
proto.EntityPB.prototype.getPosition = function() {
  return /** @type{?proto.PositionPB} */ (
    jspb.Message.getWrapperField(this, proto.PositionPB, 5));
};


/**
 * @param {?proto.PositionPB|undefined} value
 * @return {!proto.EntityPB} returns this
*/
proto.EntityPB.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EntityPB.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional float radius = 6;
 * @return {number}
 */
proto.EntityPB.prototype.getRadius = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.setRadius = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * repeated PositionPB vertices = 7;
 * @return {!Array<!proto.PositionPB>}
 */
proto.EntityPB.prototype.getVerticesList = function() {
  return /** @type{!Array<!proto.PositionPB>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PositionPB, 7));
};


/**
 * @param {!Array<!proto.PositionPB>} value
 * @return {!proto.EntityPB} returns this
*/
proto.EntityPB.prototype.setVerticesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.PositionPB=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PositionPB}
 */
proto.EntityPB.prototype.addVertices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.PositionPB, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.clearVerticesList = function() {
  return this.setVerticesList([]);
};


/**
 * repeated uint64 collides_with = 8;
 * @return {!Array<number>}
 */
proto.EntityPB.prototype.getCollidesWithList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.setCollidesWithList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.addCollidesWith = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.clearCollidesWithList = function() {
  return this.setCollidesWithList([]);
};


/**
 * optional float speed = 9;
 * @return {number}
 */
proto.EntityPB.prototype.getSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.setSpeed = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional DirectionPB direction = 10;
 * @return {?proto.DirectionPB}
 */
proto.EntityPB.prototype.getDirection = function() {
  return /** @type{?proto.DirectionPB} */ (
    jspb.Message.getWrapperField(this, proto.DirectionPB, 10));
};


/**
 * @param {?proto.DirectionPB|undefined} value
 * @return {!proto.EntityPB} returns this
*/
proto.EntityPB.prototype.setDirection = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.clearDirection = function() {
  return this.setDirection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EntityPB.prototype.hasDirection = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool is_moving = 11;
 * @return {boolean}
 */
proto.EntityPB.prototype.getIsMoving = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.setIsMoving = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional PlayerPB player = 12;
 * @return {?proto.PlayerPB}
 */
proto.EntityPB.prototype.getPlayer = function() {
  return /** @type{?proto.PlayerPB} */ (
    jspb.Message.getWrapperField(this, proto.PlayerPB, 12));
};


/**
 * @param {?proto.PlayerPB|undefined} value
 * @return {!proto.EntityPB} returns this
*/
proto.EntityPB.prototype.setPlayer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.EntityPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.clearPlayer = function() {
  return this.setPlayer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EntityPB.prototype.hasPlayer = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ProjectilePB projectile = 13;
 * @return {?proto.ProjectilePB}
 */
proto.EntityPB.prototype.getProjectile = function() {
  return /** @type{?proto.ProjectilePB} */ (
    jspb.Message.getWrapperField(this, proto.ProjectilePB, 13));
};


/**
 * @param {?proto.ProjectilePB|undefined} value
 * @return {!proto.EntityPB} returns this
*/
proto.EntityPB.prototype.setProjectile = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.EntityPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.clearProjectile = function() {
  return this.setProjectile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EntityPB.prototype.hasProjectile = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ObstaclePB obstacle = 14;
 * @return {?proto.ObstaclePB}
 */
proto.EntityPB.prototype.getObstacle = function() {
  return /** @type{?proto.ObstaclePB} */ (
    jspb.Message.getWrapperField(this, proto.ObstaclePB, 14));
};


/**
 * @param {?proto.ObstaclePB|undefined} value
 * @return {!proto.EntityPB} returns this
*/
proto.EntityPB.prototype.setObstacle = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.EntityPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.clearObstacle = function() {
  return this.setObstacle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EntityPB.prototype.hasObstacle = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional PowerUpPB power_up = 15;
 * @return {?proto.PowerUpPB}
 */
proto.EntityPB.prototype.getPowerUp = function() {
  return /** @type{?proto.PowerUpPB} */ (
    jspb.Message.getWrapperField(this, proto.PowerUpPB, 15));
};


/**
 * @param {?proto.PowerUpPB|undefined} value
 * @return {!proto.EntityPB} returns this
*/
proto.EntityPB.prototype.setPowerUp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.EntityPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.clearPowerUp = function() {
  return this.setPowerUp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EntityPB.prototype.hasPowerUp = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ItemPB item = 16;
 * @return {?proto.ItemPB}
 */
proto.EntityPB.prototype.getItem = function() {
  return /** @type{?proto.ItemPB} */ (
    jspb.Message.getWrapperField(this, proto.ItemPB, 16));
};


/**
 * @param {?proto.ItemPB|undefined} value
 * @return {!proto.EntityPB} returns this
*/
proto.EntityPB.prototype.setItem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.EntityPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.clearItem = function() {
  return this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EntityPB.prototype.hasItem = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional PoolPB pool = 17;
 * @return {?proto.PoolPB}
 */
proto.EntityPB.prototype.getPool = function() {
  return /** @type{?proto.PoolPB} */ (
    jspb.Message.getWrapperField(this, proto.PoolPB, 17));
};


/**
 * @param {?proto.PoolPB|undefined} value
 * @return {!proto.EntityPB} returns this
*/
proto.EntityPB.prototype.setPool = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.EntityPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.clearPool = function() {
  return this.setPool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EntityPB.prototype.hasPool = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional CratePB crate = 18;
 * @return {?proto.CratePB}
 */
proto.EntityPB.prototype.getCrate = function() {
  return /** @type{?proto.CratePB} */ (
    jspb.Message.getWrapperField(this, proto.CratePB, 18));
};


/**
 * @param {?proto.CratePB|undefined} value
 * @return {!proto.EntityPB} returns this
*/
proto.EntityPB.prototype.setCrate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.EntityPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.clearCrate = function() {
  return this.setCrate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EntityPB.prototype.hasCrate = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional BushPB bush = 19;
 * @return {?proto.BushPB}
 */
proto.EntityPB.prototype.getBush = function() {
  return /** @type{?proto.BushPB} */ (
    jspb.Message.getWrapperField(this, proto.BushPB, 19));
};


/**
 * @param {?proto.BushPB|undefined} value
 * @return {!proto.EntityPB} returns this
*/
proto.EntityPB.prototype.setBush = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.EntityPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.clearBush = function() {
  return this.setBush(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EntityPB.prototype.hasBush = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional TrapPB trap = 20;
 * @return {?proto.TrapPB}
 */
proto.EntityPB.prototype.getTrap = function() {
  return /** @type{?proto.TrapPB} */ (
    jspb.Message.getWrapperField(this, proto.TrapPB, 20));
};


/**
 * @param {?proto.TrapPB|undefined} value
 * @return {!proto.EntityPB} returns this
*/
proto.EntityPB.prototype.setTrap = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.EntityPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.EntityPB} returns this
 */
proto.EntityPB.prototype.clearTrap = function() {
  return this.setTrap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EntityPB.prototype.hasTrap = function() {
  return jspb.Message.getField(this, 20) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PlayerPB.repeatedFields_ = [3,10,13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PlayerPB.prototype.toObject = function(opt_includeInstance) {
  return proto.PlayerPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PlayerPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PlayerPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    health: jspb.Message.getFieldWithDefault(msg, 1, 0),
    killCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    currentActionsList: jspb.Message.toObjectList(msg.getCurrentActionsList(),
    proto.PlayerActionPB.toObject, includeInstance),
    availableStamina: jspb.Message.getFieldWithDefault(msg, 4, 0),
    maxStamina: jspb.Message.getFieldWithDefault(msg, 5, 0),
    staminaInterval: jspb.Message.getFieldWithDefault(msg, 6, 0),
    rechargingStamina: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    characterName: jspb.Message.getFieldWithDefault(msg, 8, ""),
    powerUps: jspb.Message.getFieldWithDefault(msg, 9, 0),
    effectsList: jspb.Message.toObjectList(msg.getEffectsList(),
    proto.EffectPB.toObject, includeInstance),
    inventory: (f = msg.getInventory()) && proto.ItemPB.toObject(includeInstance, f),
    cooldownsMap: (f = msg.getCooldownsMap()) ? f.toObject(includeInstance, undefined) : [],
    visiblePlayersList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
    onBush: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    forcedMovement: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    bountyCompleted: jspb.Message.getBooleanFieldWithDefault(msg, 16, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PlayerPB}
 */
proto.PlayerPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PlayerPB;
  return proto.PlayerPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PlayerPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PlayerPB}
 */
proto.PlayerPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHealth(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setKillCount(value);
      break;
    case 3:
      var value = new proto.PlayerActionPB;
      reader.readMessage(value,proto.PlayerActionPB.deserializeBinaryFromReader);
      msg.addCurrentActions(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAvailableStamina(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxStamina(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStaminaInterval(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRechargingStamina(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCharacterName(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPowerUps(value);
      break;
    case 10:
      var value = new proto.EffectPB;
      reader.readMessage(value,proto.EffectPB.deserializeBinaryFromReader);
      msg.addEffects(value);
      break;
    case 11:
      var value = new proto.ItemPB;
      reader.readMessage(value,proto.ItemPB.deserializeBinaryFromReader);
      msg.setInventory(value);
      break;
    case 12:
      var value = msg.getCooldownsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readUint64, null, "", 0);
         });
      break;
    case 13:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addVisiblePlayers(values[i]);
      }
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOnBush(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForcedMovement(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBountyCompleted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PlayerPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PlayerPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PlayerPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PlayerPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHealth();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getKillCount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getCurrentActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.PlayerActionPB.serializeBinaryToWriter
    );
  }
  f = message.getAvailableStamina();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getMaxStamina();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getStaminaInterval();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getRechargingStamina();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getCharacterName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPowerUps();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getEffectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.EffectPB.serializeBinaryToWriter
    );
  }
  f = message.getInventory();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.ItemPB.serializeBinaryToWriter
    );
  }
  f = message.getCooldownsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(12, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeUint64);
  }
  f = message.getVisiblePlayersList();
  if (f.length > 0) {
    writer.writePackedUint64(
      13,
      f
    );
  }
  f = message.getOnBush();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getForcedMovement();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getBountyCompleted();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
};


/**
 * optional uint64 health = 1;
 * @return {number}
 */
proto.PlayerPB.prototype.getHealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PlayerPB} returns this
 */
proto.PlayerPB.prototype.setHealth = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 kill_count = 2;
 * @return {number}
 */
proto.PlayerPB.prototype.getKillCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PlayerPB} returns this
 */
proto.PlayerPB.prototype.setKillCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated PlayerActionPB current_actions = 3;
 * @return {!Array<!proto.PlayerActionPB>}
 */
proto.PlayerPB.prototype.getCurrentActionsList = function() {
  return /** @type{!Array<!proto.PlayerActionPB>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.PlayerActionPB, 3));
};


/**
 * @param {!Array<!proto.PlayerActionPB>} value
 * @return {!proto.PlayerPB} returns this
*/
proto.PlayerPB.prototype.setCurrentActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.PlayerActionPB=} opt_value
 * @param {number=} opt_index
 * @return {!proto.PlayerActionPB}
 */
proto.PlayerPB.prototype.addCurrentActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.PlayerActionPB, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PlayerPB} returns this
 */
proto.PlayerPB.prototype.clearCurrentActionsList = function() {
  return this.setCurrentActionsList([]);
};


/**
 * optional uint64 available_stamina = 4;
 * @return {number}
 */
proto.PlayerPB.prototype.getAvailableStamina = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.PlayerPB} returns this
 */
proto.PlayerPB.prototype.setAvailableStamina = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 max_stamina = 5;
 * @return {number}
 */
proto.PlayerPB.prototype.getMaxStamina = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.PlayerPB} returns this
 */
proto.PlayerPB.prototype.setMaxStamina = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 stamina_interval = 6;
 * @return {number}
 */
proto.PlayerPB.prototype.getStaminaInterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.PlayerPB} returns this
 */
proto.PlayerPB.prototype.setStaminaInterval = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool recharging_stamina = 7;
 * @return {boolean}
 */
proto.PlayerPB.prototype.getRechargingStamina = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PlayerPB} returns this
 */
proto.PlayerPB.prototype.setRechargingStamina = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string character_name = 8;
 * @return {string}
 */
proto.PlayerPB.prototype.getCharacterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.PlayerPB} returns this
 */
proto.PlayerPB.prototype.setCharacterName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional uint64 power_ups = 9;
 * @return {number}
 */
proto.PlayerPB.prototype.getPowerUps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.PlayerPB} returns this
 */
proto.PlayerPB.prototype.setPowerUps = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * repeated EffectPB effects = 10;
 * @return {!Array<!proto.EffectPB>}
 */
proto.PlayerPB.prototype.getEffectsList = function() {
  return /** @type{!Array<!proto.EffectPB>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.EffectPB, 10));
};


/**
 * @param {!Array<!proto.EffectPB>} value
 * @return {!proto.PlayerPB} returns this
*/
proto.PlayerPB.prototype.setEffectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.EffectPB=} opt_value
 * @param {number=} opt_index
 * @return {!proto.EffectPB}
 */
proto.PlayerPB.prototype.addEffects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.EffectPB, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PlayerPB} returns this
 */
proto.PlayerPB.prototype.clearEffectsList = function() {
  return this.setEffectsList([]);
};


/**
 * optional ItemPB inventory = 11;
 * @return {?proto.ItemPB}
 */
proto.PlayerPB.prototype.getInventory = function() {
  return /** @type{?proto.ItemPB} */ (
    jspb.Message.getWrapperField(this, proto.ItemPB, 11));
};


/**
 * @param {?proto.ItemPB|undefined} value
 * @return {!proto.PlayerPB} returns this
*/
proto.PlayerPB.prototype.setInventory = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PlayerPB} returns this
 */
proto.PlayerPB.prototype.clearInventory = function() {
  return this.setInventory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PlayerPB.prototype.hasInventory = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * map<string, uint64> cooldowns = 12;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.PlayerPB.prototype.getCooldownsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 12, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.PlayerPB} returns this
 */
proto.PlayerPB.prototype.clearCooldownsMap = function() {
  this.getCooldownsMap().clear();
  return this;
};


/**
 * repeated uint64 visible_players = 13;
 * @return {!Array<number>}
 */
proto.PlayerPB.prototype.getVisiblePlayersList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.PlayerPB} returns this
 */
proto.PlayerPB.prototype.setVisiblePlayersList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.PlayerPB} returns this
 */
proto.PlayerPB.prototype.addVisiblePlayers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PlayerPB} returns this
 */
proto.PlayerPB.prototype.clearVisiblePlayersList = function() {
  return this.setVisiblePlayersList([]);
};


/**
 * optional bool on_bush = 14;
 * @return {boolean}
 */
proto.PlayerPB.prototype.getOnBush = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PlayerPB} returns this
 */
proto.PlayerPB.prototype.setOnBush = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bool forced_movement = 15;
 * @return {boolean}
 */
proto.PlayerPB.prototype.getForcedMovement = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PlayerPB} returns this
 */
proto.PlayerPB.prototype.setForcedMovement = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional bool bounty_completed = 16;
 * @return {boolean}
 */
proto.PlayerPB.prototype.getBountyCompleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PlayerPB} returns this
 */
proto.PlayerPB.prototype.setBountyCompleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EffectPB.prototype.toObject = function(opt_includeInstance) {
  return proto.EffectPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EffectPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EffectPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    durationMs: jspb.Message.getFieldWithDefault(msg, 2, 0),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EffectPB}
 */
proto.EffectPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EffectPB;
  return proto.EffectPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EffectPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EffectPB}
 */
proto.EffectPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDurationMs(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EffectPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.EffectPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.EffectPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EffectPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDurationMs();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.EffectPB.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.EffectPB} returns this
 */
proto.EffectPB.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 duration_ms = 2;
 * @return {number}
 */
proto.EffectPB.prototype.getDurationMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.EffectPB} returns this
 */
proto.EffectPB.prototype.setDurationMs = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 id = 3;
 * @return {number}
 */
proto.EffectPB.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.EffectPB} returns this
 */
proto.EffectPB.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ItemPB.prototype.toObject = function(opt_includeInstance) {
  return proto.ItemPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ItemPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ItemPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ItemPB}
 */
proto.ItemPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ItemPB;
  return proto.ItemPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ItemPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ItemPB}
 */
proto.ItemPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ItemPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ItemPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ItemPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ItemPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ItemPB.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ItemPB} returns this
 */
proto.ItemPB.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ProjectilePB.prototype.toObject = function(opt_includeInstance) {
  return proto.ProjectilePB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProjectilePB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProjectilePB.toObject = function(includeInstance, msg) {
  var f, obj = {
    damage: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ownerId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    skillKey: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ProjectilePB}
 */
proto.ProjectilePB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProjectilePB;
  return proto.ProjectilePB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProjectilePB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProjectilePB}
 */
proto.ProjectilePB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDamage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOwnerId(value);
      break;
    case 3:
      var value = /** @type {!proto.ProjectileStatusPB} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkillKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ProjectilePB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProjectilePB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProjectilePB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProjectilePB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDamage();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getOwnerId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getSkillKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint64 damage = 1;
 * @return {number}
 */
proto.ProjectilePB.prototype.getDamage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProjectilePB} returns this
 */
proto.ProjectilePB.prototype.setDamage = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 owner_id = 2;
 * @return {number}
 */
proto.ProjectilePB.prototype.getOwnerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ProjectilePB} returns this
 */
proto.ProjectilePB.prototype.setOwnerId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional ProjectileStatusPB status = 3;
 * @return {!proto.ProjectileStatusPB}
 */
proto.ProjectilePB.prototype.getStatus = function() {
  return /** @type {!proto.ProjectileStatusPB} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ProjectileStatusPB} value
 * @return {!proto.ProjectilePB} returns this
 */
proto.ProjectilePB.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string skill_key = 4;
 * @return {string}
 */
proto.ProjectilePB.prototype.getSkillKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProjectilePB} returns this
 */
proto.ProjectilePB.prototype.setSkillKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ObstaclePB.prototype.toObject = function(opt_includeInstance) {
  return proto.ObstaclePB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ObstaclePB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ObstaclePB.toObject = function(includeInstance, msg) {
  var f, obj = {
    color: jspb.Message.getFieldWithDefault(msg, 1, ""),
    collisionable: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    status: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ObstaclePB}
 */
proto.ObstaclePB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ObstaclePB;
  return proto.ObstaclePB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ObstaclePB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ObstaclePB}
 */
proto.ObstaclePB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setColor(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCollisionable(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ObstaclePB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ObstaclePB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ObstaclePB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ObstaclePB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColor();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCollisionable();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string color = 1;
 * @return {string}
 */
proto.ObstaclePB.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ObstaclePB} returns this
 */
proto.ObstaclePB.prototype.setColor = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool collisionable = 2;
 * @return {boolean}
 */
proto.ObstaclePB.prototype.getCollisionable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ObstaclePB} returns this
 */
proto.ObstaclePB.prototype.setCollisionable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string status = 3;
 * @return {string}
 */
proto.ObstaclePB.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ObstaclePB} returns this
 */
proto.ObstaclePB.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PowerUpPB.prototype.toObject = function(opt_includeInstance) {
  return proto.PowerUpPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PowerUpPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PowerUpPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PowerUpPB}
 */
proto.PowerUpPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PowerUpPB;
  return proto.PowerUpPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PowerUpPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PowerUpPB}
 */
proto.PowerUpPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOwnerId(value);
      break;
    case 2:
      var value = /** @type {!proto.PowerUpstatusPB} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PowerUpPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PowerUpPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PowerUpPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PowerUpPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional uint64 owner_id = 1;
 * @return {number}
 */
proto.PowerUpPB.prototype.getOwnerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PowerUpPB} returns this
 */
proto.PowerUpPB.prototype.setOwnerId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional PowerUpstatusPB status = 2;
 * @return {!proto.PowerUpstatusPB}
 */
proto.PowerUpPB.prototype.getStatus = function() {
  return /** @type {!proto.PowerUpstatusPB} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.PowerUpstatusPB} value
 * @return {!proto.PowerUpPB} returns this
 */
proto.PowerUpPB.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CratePB.prototype.toObject = function(opt_includeInstance) {
  return proto.CratePB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CratePB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CratePB.toObject = function(includeInstance, msg) {
  var f, obj = {
    health: jspb.Message.getFieldWithDefault(msg, 1, 0),
    amountOfPowerUps: jspb.Message.getFieldWithDefault(msg, 2, 0),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CratePB}
 */
proto.CratePB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CratePB;
  return proto.CratePB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CratePB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CratePB}
 */
proto.CratePB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHealth(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmountOfPowerUps(value);
      break;
    case 3:
      var value = /** @type {!proto.CrateStatusPB} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CratePB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CratePB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CratePB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CratePB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHealth();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getAmountOfPowerUps();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional uint64 health = 1;
 * @return {number}
 */
proto.CratePB.prototype.getHealth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.CratePB} returns this
 */
proto.CratePB.prototype.setHealth = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 amount_of_power_ups = 2;
 * @return {number}
 */
proto.CratePB.prototype.getAmountOfPowerUps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.CratePB} returns this
 */
proto.CratePB.prototype.setAmountOfPowerUps = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional CrateStatusPB status = 3;
 * @return {!proto.CrateStatusPB}
 */
proto.CratePB.prototype.getStatus = function() {
  return /** @type {!proto.CrateStatusPB} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.CrateStatusPB} value
 * @return {!proto.CratePB} returns this
 */
proto.CratePB.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PoolPB.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PoolPB.prototype.toObject = function(opt_includeInstance) {
  return proto.PoolPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PoolPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PoolPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    effectsList: jspb.Message.toObjectList(msg.getEffectsList(),
    proto.EffectPB.toObject, includeInstance),
    skillKey: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PoolPB}
 */
proto.PoolPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PoolPB;
  return proto.PoolPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PoolPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PoolPB}
 */
proto.PoolPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOwnerId(value);
      break;
    case 2:
      var value = /** @type {!proto.PoolStatusPB} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = new proto.EffectPB;
      reader.readMessage(value,proto.EffectPB.deserializeBinaryFromReader);
      msg.addEffects(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkillKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PoolPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PoolPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PoolPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PoolPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getEffectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.EffectPB.serializeBinaryToWriter
    );
  }
  f = message.getSkillKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint64 owner_id = 1;
 * @return {number}
 */
proto.PoolPB.prototype.getOwnerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PoolPB} returns this
 */
proto.PoolPB.prototype.setOwnerId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional PoolStatusPB status = 2;
 * @return {!proto.PoolStatusPB}
 */
proto.PoolPB.prototype.getStatus = function() {
  return /** @type {!proto.PoolStatusPB} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.PoolStatusPB} value
 * @return {!proto.PoolPB} returns this
 */
proto.PoolPB.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated EffectPB effects = 3;
 * @return {!Array<!proto.EffectPB>}
 */
proto.PoolPB.prototype.getEffectsList = function() {
  return /** @type{!Array<!proto.EffectPB>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.EffectPB, 3));
};


/**
 * @param {!Array<!proto.EffectPB>} value
 * @return {!proto.PoolPB} returns this
*/
proto.PoolPB.prototype.setEffectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.EffectPB=} opt_value
 * @param {number=} opt_index
 * @return {!proto.EffectPB}
 */
proto.PoolPB.prototype.addEffects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.EffectPB, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PoolPB} returns this
 */
proto.PoolPB.prototype.clearEffectsList = function() {
  return this.setEffectsList([]);
};


/**
 * optional string skill_key = 4;
 * @return {string}
 */
proto.PoolPB.prototype.getSkillKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.PoolPB} returns this
 */
proto.PoolPB.prototype.setSkillKey = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BushPB.prototype.toObject = function(opt_includeInstance) {
  return proto.BushPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BushPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BushPB.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BushPB}
 */
proto.BushPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BushPB;
  return proto.BushPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BushPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BushPB}
 */
proto.BushPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BushPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BushPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BushPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BushPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TrapPB.prototype.toObject = function(opt_includeInstance) {
  return proto.TrapPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TrapPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TrapPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TrapPB}
 */
proto.TrapPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TrapPB;
  return proto.TrapPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TrapPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TrapPB}
 */
proto.TrapPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOwnerId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.TrapStatusPB} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TrapPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TrapPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TrapPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TrapPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional uint64 owner_id = 1;
 * @return {number}
 */
proto.TrapPB.prototype.getOwnerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.TrapPB} returns this
 */
proto.TrapPB.prototype.setOwnerId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.TrapPB.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.TrapPB} returns this
 */
proto.TrapPB.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TrapStatusPB status = 3;
 * @return {!proto.TrapStatusPB}
 */
proto.TrapPB.prototype.getStatus = function() {
  return /** @type {!proto.TrapStatusPB} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.TrapStatusPB} value
 * @return {!proto.TrapPB} returns this
 */
proto.TrapPB.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PlayerActionPB.prototype.toObject = function(opt_includeInstance) {
  return proto.PlayerActionPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PlayerActionPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PlayerActionPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 1, 0),
    duration: jspb.Message.getFieldWithDefault(msg, 2, 0),
    destination: (f = msg.getDestination()) && proto.PositionPB.toObject(includeInstance, f),
    direction: (f = msg.getDirection()) && proto.PositionPB.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PlayerActionPB}
 */
proto.PlayerActionPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PlayerActionPB;
  return proto.PlayerActionPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PlayerActionPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PlayerActionPB}
 */
proto.PlayerActionPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.PlayerActionTypePB} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDuration(value);
      break;
    case 3:
      var value = new proto.PositionPB;
      reader.readMessage(value,proto.PositionPB.deserializeBinaryFromReader);
      msg.setDestination(value);
      break;
    case 4:
      var value = new proto.PositionPB;
      reader.readMessage(value,proto.PositionPB.deserializeBinaryFromReader);
      msg.setDirection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PlayerActionPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PlayerActionPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PlayerActionPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PlayerActionPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getDestination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.PositionPB.serializeBinaryToWriter
    );
  }
  f = message.getDirection();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.PositionPB.serializeBinaryToWriter
    );
  }
};


/**
 * optional PlayerActionTypePB action = 1;
 * @return {!proto.PlayerActionTypePB}
 */
proto.PlayerActionPB.prototype.getAction = function() {
  return /** @type {!proto.PlayerActionTypePB} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.PlayerActionTypePB} value
 * @return {!proto.PlayerActionPB} returns this
 */
proto.PlayerActionPB.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint64 duration = 2;
 * @return {number}
 */
proto.PlayerActionPB.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PlayerActionPB} returns this
 */
proto.PlayerActionPB.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional PositionPB destination = 3;
 * @return {?proto.PositionPB}
 */
proto.PlayerActionPB.prototype.getDestination = function() {
  return /** @type{?proto.PositionPB} */ (
    jspb.Message.getWrapperField(this, proto.PositionPB, 3));
};


/**
 * @param {?proto.PositionPB|undefined} value
 * @return {!proto.PlayerActionPB} returns this
*/
proto.PlayerActionPB.prototype.setDestination = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PlayerActionPB} returns this
 */
proto.PlayerActionPB.prototype.clearDestination = function() {
  return this.setDestination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PlayerActionPB.prototype.hasDestination = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PositionPB direction = 4;
 * @return {?proto.PositionPB}
 */
proto.PlayerActionPB.prototype.getDirection = function() {
  return /** @type{?proto.PositionPB} */ (
    jspb.Message.getWrapperField(this, proto.PositionPB, 4));
};


/**
 * @param {?proto.PositionPB|undefined} value
 * @return {!proto.PlayerActionPB} returns this
*/
proto.PlayerActionPB.prototype.setDirection = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PlayerActionPB} returns this
 */
proto.PlayerActionPB.prototype.clearDirection = function() {
  return this.setDirection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PlayerActionPB.prototype.hasDirection = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MovePB.prototype.toObject = function(opt_includeInstance) {
  return proto.MovePB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MovePB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MovePB.toObject = function(includeInstance, msg) {
  var f, obj = {
    direction: (f = msg.getDirection()) && proto.DirectionPB.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MovePB}
 */
proto.MovePB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MovePB;
  return proto.MovePB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MovePB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MovePB}
 */
proto.MovePB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.DirectionPB;
      reader.readMessage(value,proto.DirectionPB.deserializeBinaryFromReader);
      msg.setDirection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MovePB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MovePB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MovePB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MovePB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.DirectionPB.serializeBinaryToWriter
    );
  }
};


/**
 * optional DirectionPB direction = 1;
 * @return {?proto.DirectionPB}
 */
proto.MovePB.prototype.getDirection = function() {
  return /** @type{?proto.DirectionPB} */ (
    jspb.Message.getWrapperField(this, proto.DirectionPB, 1));
};


/**
 * @param {?proto.DirectionPB|undefined} value
 * @return {!proto.MovePB} returns this
*/
proto.MovePB.prototype.setDirection = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MovePB} returns this
 */
proto.MovePB.prototype.clearDirection = function() {
  return this.setDirection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MovePB.prototype.hasDirection = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AttackPB.prototype.toObject = function(opt_includeInstance) {
  return proto.AttackPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AttackPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AttackPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    skill: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parameters: (f = msg.getParameters()) && proto.AttackParametersPB.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AttackPB}
 */
proto.AttackPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AttackPB;
  return proto.AttackPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AttackPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AttackPB}
 */
proto.AttackPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSkill(value);
      break;
    case 2:
      var value = new proto.AttackParametersPB;
      reader.readMessage(value,proto.AttackParametersPB.deserializeBinaryFromReader);
      msg.setParameters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AttackPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AttackPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AttackPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AttackPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkill();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParameters();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.AttackParametersPB.serializeBinaryToWriter
    );
  }
};


/**
 * optional string skill = 1;
 * @return {string}
 */
proto.AttackPB.prototype.getSkill = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AttackPB} returns this
 */
proto.AttackPB.prototype.setSkill = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AttackParametersPB parameters = 2;
 * @return {?proto.AttackParametersPB}
 */
proto.AttackPB.prototype.getParameters = function() {
  return /** @type{?proto.AttackParametersPB} */ (
    jspb.Message.getWrapperField(this, proto.AttackParametersPB, 2));
};


/**
 * @param {?proto.AttackParametersPB|undefined} value
 * @return {!proto.AttackPB} returns this
*/
proto.AttackPB.prototype.setParameters = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AttackPB} returns this
 */
proto.AttackPB.prototype.clearParameters = function() {
  return this.setParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AttackPB.prototype.hasParameters = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AttackParametersPB.prototype.toObject = function(opt_includeInstance) {
  return proto.AttackParametersPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AttackParametersPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AttackParametersPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    target: (f = msg.getTarget()) && proto.DirectionPB.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AttackParametersPB}
 */
proto.AttackParametersPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AttackParametersPB;
  return proto.AttackParametersPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AttackParametersPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AttackParametersPB}
 */
proto.AttackParametersPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.DirectionPB;
      reader.readMessage(value,proto.DirectionPB.deserializeBinaryFromReader);
      msg.setTarget(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AttackParametersPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AttackParametersPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AttackParametersPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AttackParametersPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTarget();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.DirectionPB.serializeBinaryToWriter
    );
  }
};


/**
 * optional DirectionPB target = 1;
 * @return {?proto.DirectionPB}
 */
proto.AttackParametersPB.prototype.getTarget = function() {
  return /** @type{?proto.DirectionPB} */ (
    jspb.Message.getWrapperField(this, proto.DirectionPB, 1));
};


/**
 * @param {?proto.DirectionPB|undefined} value
 * @return {!proto.AttackParametersPB} returns this
*/
proto.AttackParametersPB.prototype.setTarget = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AttackParametersPB} returns this
 */
proto.AttackParametersPB.prototype.clearTarget = function() {
  return this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AttackParametersPB.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UseItemPB.prototype.toObject = function(opt_includeInstance) {
  return proto.UseItemPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UseItemPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UseItemPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UseItemPB}
 */
proto.UseItemPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UseItemPB;
  return proto.UseItemPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UseItemPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UseItemPB}
 */
proto.UseItemPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setItem(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UseItemPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UseItemPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UseItemPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UseItemPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItem();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 item = 1;
 * @return {number}
 */
proto.UseItemPB.prototype.getItem = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.UseItemPB} returns this
 */
proto.UseItemPB.prototype.setItem = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SelectBountyPB.prototype.toObject = function(opt_includeInstance) {
  return proto.SelectBountyPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SelectBountyPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SelectBountyPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    bountyQuestId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SelectBountyPB}
 */
proto.SelectBountyPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SelectBountyPB;
  return proto.SelectBountyPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SelectBountyPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SelectBountyPB}
 */
proto.SelectBountyPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBountyQuestId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SelectBountyPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SelectBountyPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SelectBountyPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SelectBountyPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBountyQuestId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string bounty_quest_id = 1;
 * @return {string}
 */
proto.SelectBountyPB.prototype.getBountyQuestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.SelectBountyPB} returns this
 */
proto.SelectBountyPB.prototype.setBountyQuestId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ToggleZonePB.prototype.toObject = function(opt_includeInstance) {
  return proto.ToggleZonePB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ToggleZonePB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ToggleZonePB.toObject = function(includeInstance, msg) {
  var f, obj = {
    active: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ToggleZonePB}
 */
proto.ToggleZonePB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ToggleZonePB;
  return proto.ToggleZonePB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ToggleZonePB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ToggleZonePB}
 */
proto.ToggleZonePB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ToggleZonePB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ToggleZonePB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ToggleZonePB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ToggleZonePB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActive();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool active = 1;
 * @return {boolean}
 */
proto.ToggleZonePB.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ToggleZonePB} returns this
 */
proto.ToggleZonePB.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ToggleBotsPB.prototype.toObject = function(opt_includeInstance) {
  return proto.ToggleBotsPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ToggleBotsPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ToggleBotsPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    active: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ToggleBotsPB}
 */
proto.ToggleBotsPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ToggleBotsPB;
  return proto.ToggleBotsPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ToggleBotsPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ToggleBotsPB}
 */
proto.ToggleBotsPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ToggleBotsPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ToggleBotsPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ToggleBotsPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ToggleBotsPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActive();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool active = 1;
 * @return {boolean}
 */
proto.ToggleBotsPB.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ToggleBotsPB} returns this
 */
proto.ToggleBotsPB.prototype.setActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ChangeTickratePB.prototype.toObject = function(opt_includeInstance) {
  return proto.ChangeTickratePB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ChangeTickratePB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChangeTickratePB.toObject = function(includeInstance, msg) {
  var f, obj = {
    tickrate: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ChangeTickratePB}
 */
proto.ChangeTickratePB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ChangeTickratePB;
  return proto.ChangeTickratePB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ChangeTickratePB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ChangeTickratePB}
 */
proto.ChangeTickratePB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTickrate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ChangeTickratePB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ChangeTickratePB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ChangeTickratePB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChangeTickratePB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTickrate();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 tickrate = 1;
 * @return {number}
 */
proto.ChangeTickratePB.prototype.getTickrate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ChangeTickratePB} returns this
 */
proto.ChangeTickratePB.prototype.setTickrate = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
<<<<<<< HEAD:apps/game_client/assets/js/serialization/messages_pb.js
proto.GameActionPB.oneofGroups_ = [[1,2,4,5,6,7,8]];
=======
proto.GameAction.oneofGroups_ = [[1,2,4,5,6,7,8,9]];
>>>>>>> main:apps/game_client/assets/js/protobuf/messages_pb.js

/**
 * @enum {number}
 */
proto.GameActionPB.ActionTypeCase = {
  ACTION_TYPE_NOT_SET: 0,
  MOVE: 1,
  ATTACK: 2,
  USE_ITEM: 4,
  SELECT_BOUNTY: 5,
  TOGGLE_ZONE: 6,
  TOGGLE_BOTS: 7,
  CHANGE_TICKRATE: 8,
  PONG: 9
};

/**
 * @return {proto.GameActionPB.ActionTypeCase}
 */
proto.GameActionPB.prototype.getActionTypeCase = function() {
  return /** @type {proto.GameActionPB.ActionTypeCase} */(jspb.Message.computeOneofCase(this, proto.GameActionPB.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GameActionPB.prototype.toObject = function(opt_includeInstance) {
  return proto.GameActionPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GameActionPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GameActionPB.toObject = function(includeInstance, msg) {
  var f, obj = {
<<<<<<< HEAD:apps/game_client/assets/js/serialization/messages_pb.js
    move: (f = msg.getMove()) && proto.MovePB.toObject(includeInstance, f),
    attack: (f = msg.getAttack()) && proto.AttackPB.toObject(includeInstance, f),
    useItem: (f = msg.getUseItem()) && proto.UseItemPB.toObject(includeInstance, f),
    selectBounty: (f = msg.getSelectBounty()) && proto.SelectBountyPB.toObject(includeInstance, f),
    toggleZone: (f = msg.getToggleZone()) && proto.ToggleZonePB.toObject(includeInstance, f),
    toggleBots: (f = msg.getToggleBots()) && proto.ToggleBotsPB.toObject(includeInstance, f),
    changeTickrate: (f = msg.getChangeTickrate()) && proto.ChangeTickratePB.toObject(includeInstance, f),
=======
    move: (f = msg.getMove()) && proto.Move.toObject(includeInstance, f),
    attack: (f = msg.getAttack()) && proto.Attack.toObject(includeInstance, f),
    useItem: (f = msg.getUseItem()) && proto.UseItem.toObject(includeInstance, f),
    selectBounty: (f = msg.getSelectBounty()) && proto.SelectBounty.toObject(includeInstance, f),
    toggleZone: (f = msg.getToggleZone()) && proto.ToggleZone.toObject(includeInstance, f),
    toggleBots: (f = msg.getToggleBots()) && proto.ToggleBots.toObject(includeInstance, f),
    changeTickrate: (f = msg.getChangeTickrate()) && proto.ChangeTickrate.toObject(includeInstance, f),
    pong: (f = msg.getPong()) && proto.Pong.toObject(includeInstance, f),
>>>>>>> main:apps/game_client/assets/js/protobuf/messages_pb.js
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GameActionPB}
 */
proto.GameActionPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GameActionPB;
  return proto.GameActionPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GameActionPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GameActionPB}
 */
proto.GameActionPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MovePB;
      reader.readMessage(value,proto.MovePB.deserializeBinaryFromReader);
      msg.setMove(value);
      break;
    case 2:
      var value = new proto.AttackPB;
      reader.readMessage(value,proto.AttackPB.deserializeBinaryFromReader);
      msg.setAttack(value);
      break;
    case 4:
      var value = new proto.UseItemPB;
      reader.readMessage(value,proto.UseItemPB.deserializeBinaryFromReader);
      msg.setUseItem(value);
      break;
    case 5:
      var value = new proto.SelectBountyPB;
      reader.readMessage(value,proto.SelectBountyPB.deserializeBinaryFromReader);
      msg.setSelectBounty(value);
      break;
    case 6:
      var value = new proto.ToggleZonePB;
      reader.readMessage(value,proto.ToggleZonePB.deserializeBinaryFromReader);
      msg.setToggleZone(value);
      break;
    case 7:
      var value = new proto.ToggleBotsPB;
      reader.readMessage(value,proto.ToggleBotsPB.deserializeBinaryFromReader);
      msg.setToggleBots(value);
      break;
    case 8:
      var value = new proto.ChangeTickratePB;
      reader.readMessage(value,proto.ChangeTickratePB.deserializeBinaryFromReader);
      msg.setChangeTickrate(value);
      break;
    case 9:
      var value = new proto.Pong;
      reader.readMessage(value,proto.Pong.deserializeBinaryFromReader);
      msg.setPong(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GameActionPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GameActionPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GameActionPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GameActionPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMove();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.MovePB.serializeBinaryToWriter
    );
  }
  f = message.getAttack();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.AttackPB.serializeBinaryToWriter
    );
  }
  f = message.getUseItem();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.UseItemPB.serializeBinaryToWriter
    );
  }
  f = message.getSelectBounty();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.SelectBountyPB.serializeBinaryToWriter
    );
  }
  f = message.getToggleZone();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ToggleZonePB.serializeBinaryToWriter
    );
  }
  f = message.getToggleBots();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ToggleBotsPB.serializeBinaryToWriter
    );
  }
  f = message.getChangeTickrate();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ChangeTickratePB.serializeBinaryToWriter
    );
  }
  f = message.getPong();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.Pong.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional MovePB move = 1;
 * @return {?proto.MovePB}
 */
proto.GameActionPB.prototype.getMove = function() {
  return /** @type{?proto.MovePB} */ (
    jspb.Message.getWrapperField(this, proto.MovePB, 1));
};


/**
 * @param {?proto.MovePB|undefined} value
 * @return {!proto.GameActionPB} returns this
*/
proto.GameActionPB.prototype.setMove = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.GameActionPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GameActionPB} returns this
 */
proto.GameActionPB.prototype.clearMove = function() {
  return this.setMove(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GameActionPB.prototype.hasMove = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AttackPB attack = 2;
 * @return {?proto.AttackPB}
 */
proto.GameActionPB.prototype.getAttack = function() {
  return /** @type{?proto.AttackPB} */ (
    jspb.Message.getWrapperField(this, proto.AttackPB, 2));
};


/**
 * @param {?proto.AttackPB|undefined} value
 * @return {!proto.GameActionPB} returns this
*/
proto.GameActionPB.prototype.setAttack = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.GameActionPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GameActionPB} returns this
 */
proto.GameActionPB.prototype.clearAttack = function() {
  return this.setAttack(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GameActionPB.prototype.hasAttack = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional UseItemPB use_item = 4;
 * @return {?proto.UseItemPB}
 */
proto.GameActionPB.prototype.getUseItem = function() {
  return /** @type{?proto.UseItemPB} */ (
    jspb.Message.getWrapperField(this, proto.UseItemPB, 4));
};


/**
 * @param {?proto.UseItemPB|undefined} value
 * @return {!proto.GameActionPB} returns this
*/
proto.GameActionPB.prototype.setUseItem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.GameActionPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GameActionPB} returns this
 */
proto.GameActionPB.prototype.clearUseItem = function() {
  return this.setUseItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GameActionPB.prototype.hasUseItem = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SelectBountyPB select_bounty = 5;
 * @return {?proto.SelectBountyPB}
 */
proto.GameActionPB.prototype.getSelectBounty = function() {
  return /** @type{?proto.SelectBountyPB} */ (
    jspb.Message.getWrapperField(this, proto.SelectBountyPB, 5));
};


/**
 * @param {?proto.SelectBountyPB|undefined} value
 * @return {!proto.GameActionPB} returns this
*/
proto.GameActionPB.prototype.setSelectBounty = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.GameActionPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GameActionPB} returns this
 */
proto.GameActionPB.prototype.clearSelectBounty = function() {
  return this.setSelectBounty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GameActionPB.prototype.hasSelectBounty = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ToggleZonePB toggle_zone = 6;
 * @return {?proto.ToggleZonePB}
 */
proto.GameActionPB.prototype.getToggleZone = function() {
  return /** @type{?proto.ToggleZonePB} */ (
    jspb.Message.getWrapperField(this, proto.ToggleZonePB, 6));
};


/**
 * @param {?proto.ToggleZonePB|undefined} value
 * @return {!proto.GameActionPB} returns this
*/
proto.GameActionPB.prototype.setToggleZone = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.GameActionPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GameActionPB} returns this
 */
proto.GameActionPB.prototype.clearToggleZone = function() {
  return this.setToggleZone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GameActionPB.prototype.hasToggleZone = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ToggleBotsPB toggle_bots = 7;
 * @return {?proto.ToggleBotsPB}
 */
proto.GameActionPB.prototype.getToggleBots = function() {
  return /** @type{?proto.ToggleBotsPB} */ (
    jspb.Message.getWrapperField(this, proto.ToggleBotsPB, 7));
};


/**
 * @param {?proto.ToggleBotsPB|undefined} value
 * @return {!proto.GameActionPB} returns this
*/
proto.GameActionPB.prototype.setToggleBots = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.GameActionPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GameActionPB} returns this
 */
proto.GameActionPB.prototype.clearToggleBots = function() {
  return this.setToggleBots(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GameActionPB.prototype.hasToggleBots = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ChangeTickratePB change_tickrate = 8;
 * @return {?proto.ChangeTickratePB}
 */
proto.GameActionPB.prototype.getChangeTickrate = function() {
  return /** @type{?proto.ChangeTickratePB} */ (
    jspb.Message.getWrapperField(this, proto.ChangeTickratePB, 8));
};


/**
 * @param {?proto.ChangeTickratePB|undefined} value
 * @return {!proto.GameActionPB} returns this
*/
proto.GameActionPB.prototype.setChangeTickrate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.GameActionPB.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GameActionPB} returns this
 */
proto.GameActionPB.prototype.clearChangeTickrate = function() {
  return this.setChangeTickrate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GameActionPB.prototype.hasChangeTickrate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Pong pong = 9;
 * @return {?proto.Pong}
 */
proto.GameAction.prototype.getPong = function() {
  return /** @type{?proto.Pong} */ (
    jspb.Message.getWrapperField(this, proto.Pong, 9));
};


/**
 * @param {?proto.Pong|undefined} value
 * @return {!proto.GameAction} returns this
*/
proto.GameAction.prototype.setPong = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.GameAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GameAction} returns this
 */
proto.GameAction.prototype.clearPong = function() {
  return this.setPong(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GameAction.prototype.hasPong = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.GameActionPB.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.GameActionPB} returns this
 */
proto.GameActionPB.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
<<<<<<< HEAD:apps/game_client/assets/js/serialization/messages_pb.js
proto.ZonePB.prototype.toObject = function(opt_includeInstance) {
  return proto.ZonePB.toObject(opt_includeInstance, this);
=======
proto.Pong.prototype.toObject = function(opt_includeInstance) {
  return proto.Pong.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Pong} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Pong.toObject = function(includeInstance, msg) {
  var f, obj = {
    pingTimestamp: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Pong}
 */
proto.Pong.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Pong;
  return proto.Pong.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Pong} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Pong}
 */
proto.Pong.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPingTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Pong.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Pong.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Pong} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Pong.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPingTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 ping_timestamp = 1;
 * @return {number}
 */
proto.Pong.prototype.getPingTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Pong} returns this
 */
proto.Pong.prototype.setPingTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Zone.prototype.toObject = function(opt_includeInstance) {
  return proto.Zone.toObject(opt_includeInstance, this);
>>>>>>> main:apps/game_client/assets/js/protobuf/messages_pb.js
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ZonePB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ZonePB.toObject = function(includeInstance, msg) {
  var f, obj = {
    radius: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    nextZoneChangeTimestamp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    shrinking: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ZonePB}
 */
proto.ZonePB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ZonePB;
  return proto.ZonePB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ZonePB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ZonePB}
 */
proto.ZonePB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRadius(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNextZoneChangeTimestamp(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShrinking(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ZonePB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ZonePB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ZonePB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ZonePB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRadius();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getNextZoneChangeTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getShrinking();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional float radius = 1;
 * @return {number}
 */
proto.ZonePB.prototype.getRadius = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ZonePB} returns this
 */
proto.ZonePB.prototype.setRadius = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional bool enabled = 2;
 * @return {boolean}
 */
proto.ZonePB.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ZonePB} returns this
 */
proto.ZonePB.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int64 next_zone_change_timestamp = 3;
 * @return {number}
 */
proto.ZonePB.prototype.getNextZoneChangeTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ZonePB} returns this
 */
proto.ZonePB.prototype.setNextZoneChangeTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool shrinking = 4;
 * @return {boolean}
 */
proto.ZonePB.prototype.getShrinking = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ZonePB} returns this
 */
proto.ZonePB.prototype.setShrinking = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.KillEntryPB.prototype.toObject = function(opt_includeInstance) {
  return proto.KillEntryPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.KillEntryPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.KillEntryPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    killerId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    victimId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.KillEntryPB}
 */
proto.KillEntryPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.KillEntryPB;
  return proto.KillEntryPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.KillEntryPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.KillEntryPB}
 */
proto.KillEntryPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setKillerId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVictimId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.KillEntryPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.KillEntryPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.KillEntryPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.KillEntryPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKillerId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getVictimId();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 killer_id = 1;
 * @return {number}
 */
proto.KillEntryPB.prototype.getKillerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.KillEntryPB} returns this
 */
proto.KillEntryPB.prototype.setKillerId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 victim_id = 2;
 * @return {number}
 */
proto.KillEntryPB.prototype.getVictimId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.KillEntryPB} returns this
 */
proto.KillEntryPB.prototype.setVictimId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BountyInfoPB.prototype.toObject = function(opt_includeInstance) {
  return proto.BountyInfoPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BountyInfoPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BountyInfoPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    questType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    reward: (f = msg.getReward()) && proto.CurrencyRewardPB.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BountyInfoPB}
 */
proto.BountyInfoPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BountyInfoPB;
  return proto.BountyInfoPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BountyInfoPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BountyInfoPB}
 */
proto.BountyInfoPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuestType(value);
      break;
    case 4:
      var value = new proto.CurrencyRewardPB;
      reader.readMessage(value,proto.CurrencyRewardPB.deserializeBinaryFromReader);
      msg.setReward(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BountyInfoPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BountyInfoPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BountyInfoPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BountyInfoPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getQuestType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReward();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.CurrencyRewardPB.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.BountyInfoPB.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.BountyInfoPB} returns this
 */
proto.BountyInfoPB.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.BountyInfoPB.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.BountyInfoPB} returns this
 */
proto.BountyInfoPB.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string quest_type = 3;
 * @return {string}
 */
proto.BountyInfoPB.prototype.getQuestType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.BountyInfoPB} returns this
 */
proto.BountyInfoPB.prototype.setQuestType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional CurrencyRewardPB reward = 4;
 * @return {?proto.CurrencyRewardPB}
 */
proto.BountyInfoPB.prototype.getReward = function() {
  return /** @type{?proto.CurrencyRewardPB} */ (
    jspb.Message.getWrapperField(this, proto.CurrencyRewardPB, 4));
};


/**
 * @param {?proto.CurrencyRewardPB|undefined} value
 * @return {!proto.BountyInfoPB} returns this
*/
proto.BountyInfoPB.prototype.setReward = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.BountyInfoPB} returns this
 */
proto.BountyInfoPB.prototype.clearReward = function() {
  return this.setReward(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.BountyInfoPB.prototype.hasReward = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CurrencyRewardPB.prototype.toObject = function(opt_includeInstance) {
  return proto.CurrencyRewardPB.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CurrencyRewardPB} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CurrencyRewardPB.toObject = function(includeInstance, msg) {
  var f, obj = {
    currency: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CurrencyRewardPB}
 */
proto.CurrencyRewardPB.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CurrencyRewardPB;
  return proto.CurrencyRewardPB.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CurrencyRewardPB} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CurrencyRewardPB}
 */
proto.CurrencyRewardPB.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CurrencyRewardPB.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CurrencyRewardPB.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CurrencyRewardPB} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CurrencyRewardPB.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string currency = 1;
 * @return {string}
 */
proto.CurrencyRewardPB.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.CurrencyRewardPB} returns this
 */
proto.CurrencyRewardPB.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 amount = 2;
 * @return {number}
 */
proto.CurrencyRewardPB.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.CurrencyRewardPB} returns this
 */
proto.CurrencyRewardPB.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.GameStatusPB = {
  PREPARING: 0,
  RUNNING: 1,
  ENDED: 2,
  SELECTING_BOUNTY: 3
};

/**
 * @enum {number}
 */
proto.ProjectileStatusPB = {
  ACTIVE: 0,
  EXPLODED: 1,
  CONSUMED: 2
};

/**
 * @enum {number}
 */
proto.CrateStatusPB = {
  FINE: 0,
  DESTROYED: 1
};

/**
 * @enum {number}
 */
proto.PowerUpstatusPB = {
  AVAILABLE: 0,
  TAKEN: 1,
  UNAVAILABLE: 2
};

/**
 * @enum {number}
 */
proto.PlayerActionTypePB = {
  MOVING: 0,
  STARTING_SKILL_1: 1,
  STARTING_SKILL_2: 2,
  EXECUTING_SKILL_1: 3,
  EXECUTING_SKILL_2: 4,
  EXECUTING_SKILL_3: 5
};

/**
 * @enum {number}
 */
proto.TrapStatusPB = {
  PENDING: 0,
  PREPARED: 1,
  TRIGGERED: 2,
  USED: 3
};

/**
 * @enum {number}
 */
proto.PoolStatusPB = {
  WAITING: 0,
  READY: 1
};

goog.object.extend(exports, proto);
