import {oimo} from './OimoPhysics.js';

// dynamics
export const World: typeof oimo.dynamics.World;
export const RigidBodyType: typeof oimo.dynamics.rigidbody.RigidBodyType;
export const RigidBodyConfig: typeof oimo.dynamics.rigidbody.RigidBodyConfig;
export const RigidBody: typeof oimo.dynamics.rigidbody.RigidBody;
export const ShapeConfig: typeof oimo.dynamics.rigidbody.ShapeConfig;
export const Shape: typeof oimo.dynamics.rigidbody.Shape;
export const SphericalJointConfig: typeof oimo.dynamics.constraint.joint.SphericalJointConfig;
export const SphericalJoint: typeof oimo.dynamics.constraint.joint.SphericalJoint;
export const RevoluteJointConfig: typeof oimo.dynamics.constraint.joint.RevoluteJointConfig;
export const RevoluteJoint: typeof oimo.dynamics.constraint.joint.RevoluteJoint;
export const CylindricalJointConfig: typeof oimo.dynamics.constraint.joint.CylindricalJointConfig;
export const CylindricalJoint: typeof oimo.dynamics.constraint.joint.CylindricalJoint;
export const PrismaticJointConfig: typeof oimo.dynamics.constraint.joint.PrismaticJointConfig;
export const PrismaticJoint: typeof oimo.dynamics.constraint.joint.PrismaticJoint;
export const UniversalJointConfig: typeof oimo.dynamics.constraint.joint.UniversalJointConfig;
export const UniversalJoint: typeof oimo.dynamics.constraint.joint.UniversalJoint;
export const RagdollJointConfig: typeof oimo.dynamics.constraint.joint.RagdollJointConfig;
export const RagdollJoint: typeof oimo.dynamics.constraint.joint.RagdollJoint;
export const GenericJointConfig: typeof oimo.dynamics.constraint.joint.GenericJointConfig;
export const GenericJoint: typeof oimo.dynamics.constraint.joint.GenericJoint;
export const JointConfig: typeof oimo.dynamics.constraint.joint.JointConfig;
export const Joint: typeof oimo.dynamics.constraint.joint.Joint;
export const SpringDamper: typeof oimo.dynamics.constraint.joint.SpringDamper;
export const TranslationalLimitMotor: typeof oimo.dynamics.constraint.joint.TranslationalLimitMotor;
export const RotationalLimitMotor: typeof oimo.dynamics.constraint.joint.RotationalLimitMotor;

// common
export const Vec3: typeof oimo.common.Vec3;
export const Quat: typeof oimo.common.Quat;
export const Mat3: typeof oimo.common.Mat3;
export const MathUtil: typeof oimo.common.MathUtil;
export const Transform: typeof oimo.common.Transform;
export const Setting: typeof oimo.common.Setting;

// collision
export const BroadPhaseType: typeof oimo.collision.broadphase.BroadPhaseType;
export const OBoxGeometry: typeof oimo.collision.geometry.BoxGeometry;
export const OSphereGeometry: typeof oimo.collision.geometry.SphereGeometry;
export const OConeGeometry: typeof oimo.collision.geometry.ConeGeometry;
export const OCylinderGeometry: typeof oimo.collision.geometry.CylinderGeometry;
export const OCapsuleGeometry: typeof oimo.collision.geometry.CapsuleGeometry;
export const OConvexHullGeometry: typeof oimo.collision.geometry.ConvexHullGeometry;
export const OGeometry: typeof oimo.collision.geometry.Geometry;

// callback
export const RayCastClosest: typeof oimo.dynamics.callback.RayCastClosest;
export const ContactCallback: typeof oimo.dynamics.callback.ContactCallback;
