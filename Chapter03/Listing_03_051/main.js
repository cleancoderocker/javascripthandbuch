'use strict';
let BYTE_A = 0b00000001;       // Binary value 00000001, decimal value 1
// Bitwise left shift
BYTE_A = BYTE_A << 1;          // Binary value 00000010, decimal value 2
BYTE_A = BYTE_A << 1;          // Binary value 00000100, decimal value 4
BYTE_A = BYTE_A << 1;          // Binary value 00001000, decimal value 8
BYTE_A = BYTE_A << 1;          // Binary value 00010000, decimal value 16
// bitwise right shift
BYTE_A = BYTE_A >> 1;          // Binary value 00001000, decimal value 8
BYTE_A = BYTE_A >> 1;          // Binary value 00000100, decimal value 4
BYTE_A = BYTE_A >> 1;          // Binary value 00000010, decimal value 2
BYTE_A = BYTE_A >> 1;          // Binary value 00000001, decimal value 1

let BYTE_B = 0b01000001;       // Binary value 01000001, decimal value 65

// bitwise AND
let BYTE_C = BYTE_A & BYTE_B;  // Binary value 00000001, decimal value 1

// bitwise OR
let BYTE_D = BYTE_A | BYTE_B;  // Binary value 01000001, decimal value 65
 
 // bitwise exclusive OR
let BYTE_E = BYTE_A ^ BYTE_B;  // Binary value 01000000, decimal value 64
