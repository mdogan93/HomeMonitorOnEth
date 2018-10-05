
context.ldr = context.ldr || 0.0;
context.pir = context.pir || 0;

if (msg.topic === 'A0') {
  context.ldr = msg.payload;
} else if (msg.topic === '4') {
  context.pir = msg.payload;
}

msg = {
    payload: {
        "Light Sensor Value" : context.ldr,
        "PIR Sensor Value" : context.pir
    }
};


return msg;
