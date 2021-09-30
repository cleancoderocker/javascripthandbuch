'use strict';
let BYTE_A = 0b00000001; // Binärwert 00000001, Dezimalwert 1
// Bitweise Linksverschiebung
BYTE_A = BYTE_A << 1; // Binärwert 00000010, Dezimalwert 2
BYTE_A = BYTE_A << 1; // Binärwert 00000100, Dezimalwert 4
BYTE_A = BYTE_A << 1; // Binärwert 00001000, Dezimalwert 8
BYTE_A = BYTE_A << 1; // Binärwert 00010000, Dezimalwert 16
// Bitweise Rechtsverschiebung
BYTE_A = BYTE_A >> 1; // Binärwert 00001000, Dezimalwert 8
BYTE_A = BYTE_A >> 1; // Binärwert 00000100, Dezimalwert 4
BYTE_A = BYTE_A >> 1; // Binärwert 00000010, Dezimalwert 2
BYTE_A = BYTE_A >> 1; // Binärwert 00000001, Dezimalwert 1
let BYTE_B = 0b01000001; // Binärwert 01000001, Dezimalwert 65
// Bitweises UND
let BYTE_C = BYTE_A & BYTE_B; // Binärwert 00000001, Dezimalwert 1
// Bitweises ODER
let BYTE_D = BYTE_A | BYTE_B; // Binärwert 01000001, Dezimalwert 65
// Bitweises exklusives ODER
let BYTE_E = BYTE_A ^ BYTE_B; // Binärwert 01000000, Dezimalwert 64