import {oimo} from './OimoPhysics.js';

// dynamics
export const World = oimo.dynamics.World;
export const RigidBodyType = oimo.dynamics.rigidbody.RigidBodyType;
export const RigidBodyConfig = oimo.dynamics.rigidbody.RigidBodyConfig;
export const RigidBody = oimo.dynamics.rigidbody.RigidBody;
export const ShapeConfig = oimo.dynamics.rigidbody.ShapeConfig;
export const Shape = oimo.dynamics.rigidbody.Shape;
export const SphericalJointConfig = oimo.dynamics.constraint.joint.SphericalJointConfig;
export const SphericalJoint = oimo.dynamics.constraint.joint.SphericalJoint;
export const RevoluteJointConfig = oimo.dynamics.constraint.joint.RevoluteJointConfig;
export const RevoluteJoint = oimo.dynamics.constraint.joint.RevoluteJoint;
export const CylindricalJointConfig = oimo.dynamics.constraint.joint.CylindricalJointConfig;
export const CylindricalJoint = oimo.dynamics.constraint.joint.CylindricalJoint;
export const PrismaticJointConfig = oimo.dynamics.constraint.joint.PrismaticJointConfig;
export const PrismaticJoint = oimo.dynamics.constraint.joint.PrismaticJoint;
export const UniversalJointConfig = oimo.dynamics.constraint.joint.UniversalJointConfig;
export const UniversalJoint = oimo.dynamics.constraint.joint.UniversalJoint;
export const RagdollJointConfig = oimo.dynamics.constraint.joint.RagdollJointConfig;
export const RagdollJoint = oimo.dynamics.constraint.joint.RagdollJoint;
export const GenericJointConfig = oimo.dynamics.constraint.joint.GenericJointConfig;
export const GenericJoint = oimo.dynamics.constraint.joint.GenericJoint;
export const JointConfig = oimo.dynamics.constraint.joint.JointConfig;
export const Joint = oimo.dynamics.constraint.joint.Joint;
export const SpringDamper = oimo.dynamics.constraint.joint.SpringDamper;
export const TranslationalLimitMotor = oimo.dynamics.constraint.joint.TranslationalLimitMotor;
export const RotationalLimitMotor = oimo.dynamics.constraint.joint.RotationalLimitMotor;

// common
export const Vec3 = oimo.common.Vec3;
export const Quat = oimo.common.Quat;
export const Mat3 = oimo.common.Mat3;
export const MathUtil = oimo.common.MathUtil;
export const Transform = oimo.common.Transform;
export const Setting = oimo.common.Setting;

// collision
export const BroadPhaseType = oimo.collision.broadphase.BroadPhaseType;
export const OBoxGeometry = oimo.collision.geometry.BoxGeometry;
export const OSphereGeometry = oimo.collision.geometry.SphereGeometry;
export const OConeGeometry = oimo.collision.geometry.ConeGeometry;
export const OCylinderGeometry = oimo.collision.geometry.CylinderGeometry;
export const OCapsuleGeometry = oimo.collision.geometry.CapsuleGeometry;
export const OConvexHullGeometry = oimo.collision.geometry.ConvexHullGeometry;
export const OGeometry = oimo.collision.geometry.Geometry;

// callback
export const RayCastClosest = oimo.dynamics.callback.RayCastClosest;
export const ContactCallback = oimo.dynamics.callback.ContactCallback;
