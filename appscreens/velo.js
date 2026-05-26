import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

export default function VeloScreen() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [velocity, setVelocity] = useState(0);
    const [acceleration, setAcceleration] = useState(0);

    const [time, setTime] = useState(new Date());
    const [dt, setDt] = useState(0);
    const [t, setT] = useState(0);

    useEffect(() => {
        const id = setTimeout(() => {
            const newTime = new Date();
            const delta = (newTime - time) / 1000; // seconds
            setDt(delta);
            setTime(newTime);

            // update total time
            const newT = t + delta;
            setT(newT);
            const newPos = {
                x: newT * newT,
                y: newT+1,
            };

            // compute velocity from position change
            const newVel =
                Math.sqrt(
                    (newPos.x - position.x) ** 2 +
                    (newPos.y - position.y) ** 2
                ) / delta;

            // compute acceleration from velocity change
            const newAcc = (newVel - velocity) / delta;

            // update state AFTER all math
            setPosition(newPos);
            setVelocity(newVel);
            setAcceleration(newAcc);

        }, 100);

        return () => clearTimeout(id);
    }, [time]);

    return (
        <View style={styles.backgrounds}>
            <Text style={styles.text}>dt: {dt.toFixed(3)}</Text>
            <Text style={styles.text}>Velocity: {velocity.toFixed(2)}</Text>
            <Text style={styles.text}>Acceleration: {acceleration.toFixed(2)}</Text>
            <Text style={styles.text}>
                Position: ({position.x.toFixed(2)}, {position.y.toFixed(2)})
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    backgrounds: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    text: {
        color: 'white',
        fontSize: 30,
    },
});