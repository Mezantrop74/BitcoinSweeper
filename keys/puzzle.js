const keys = [
  '0000000000000000000000000000000000000000000000000000000000000001',
  '0000000000000000000000000000000000000000000000000000000000000003',
  '0000000000000000000000000000000000000000000000000000000000000007',
  '0000000000000000000000000000000000000000000000000000000000000008',
  '0000000000000000000000000000000000000000000000000000000000000015',
  '0000000000000000000000000000000000000000000000000000000000000031',
  '000000000000000000000000000000000000000000000000000000000000004c',
  '00000000000000000000000000000000000000000000000000000000000000e0',
  '00000000000000000000000000000000000000000000000000000000000001d3',
  '0000000000000000000000000000000000000000000000000000000000000202',
  '0000000000000000000000000000000000000000000000000000000000000483',
  '0000000000000000000000000000000000000000000000000000000000000a7b',
  '0000000000000000000000000000000000000000000000000000000000001460',
  '0000000000000000000000000000000000000000000000000000000000002930',
  '00000000000000000000000000000000000000000000000000000000000068f3',
  '000000000000000000000000000000000000000000000000000000000000c936',
  '000000000000000000000000000000000000000000000000000000000001764f',
  '000000000000000000000000000000000000000000000000000000000003080d',
  '000000000000000000000000000000000000000000000000000000000005749f',
  '00000000000000000000000000000000000000000000000000000000000d2c55',
  '00000000000000000000000000000000000000000000000000000000001ba534',
  '00000000000000000000000000000000000000000000000000000000002de40f',
  '0000000000000000000000000000000000000000000000000000000000556e52',
  '0000000000000000000000000000000000000000000000000000000000dc2a04',
  '0000000000000000000000000000000000000000000000000000000001fa5ee5',
  '000000000000000000000000000000000000000000000000000000000340326e',
  '0000000000000000000000000000000000000000000000000000000006ac3875',
  '000000000000000000000000000000000000000000000000000000000d916ce8',
  '0000000000000000000000000000000000000000000000000000000017e2551e',
  '000000000000000000000000000000000000000000000000000000003d94cd64',
  '000000000000000000000000000000000000000000000000000000007d4fe747',
  '00000000000000000000000000000000000000000000000000000000b862a62e',
  '00000000000000000000000000000000000000000000000000000001a96ca8d8',
  '000000000000000000000000000000000000000000000000000000034a65911d',
  '00000000000000000000000000000000000000000000000000000004aed21170',
  '00000000000000000000000000000000000000000000000000000009de820a7c',
  '0000000000000000000000000000000000000000000000000000001757756a93',
  '00000000000000000000000000000000000000000000000000000022382facd0',
  '0000000000000000000000000000000000000000000000000000004b5f8303e9',
  '000000000000000000000000000000000000000000000000000000e9ae4933d6',
  '00000000000000000000000000000000000000000000000000000153869acc5b',
  '000000000000000000000000000000000000000000000000000002a221c58d8f',
  '000000000000000000000000000000000000000000000000000006bd3b27c591',
  '00000000000000000000000000000000000000000000000000000e02b35a358f',
  '0000000000000000000000000000000000000000000000000000122fca143c05',
  '00000000000000000000000000000000000000000000000000002ec18388d544',
  '00000000000000000000000000000000000000000000000000006cd610b53cba',
  '0000000000000000000000000000000000000000000000000000ade6d7ce3b9b',
  '000000000000000000000000000000000000000000000000000174176b015f4d',
  '00000000000000000000000000000000000000000000000000022bd43c2e9354',
  '00000000000000000000000000000000000000000000000000075070a1a009d4',
  '000000000000000000000000000000000000000000000000000efae164cb9e3c',
  '00000000000000000000000000000000000000000000000000180788e47e326c',
  '00000000000000000000000000000000000000000000000000236fb6d5ad1f46',
  '000000000000000000000000000000000000000000000000006abe1f9b67e114',
  '000000000000000000000000000000000000000000000000009d18b63ac4ffdf',
  '00000000000000000000000000000000000000000000000001eb25c90795d61c',
  '00000000000000000000000000000000000000000000000002c675b852189a21',
  '00000000000000000000000000000000000000000000000007496cbb87cab44f',
]

module.exports = keys.map((k, i) => Object.assign(Buffer.from(k, 'hex'), {original: 'puzzle #' + i}))