export function onPointermove(event: PointerEvent, width: number, height: number) {
    if (event.pointerType == 'touch') return

    const ratioX = event.clientX / width
    const ratioY = event.clientY / height

    document.documentElement.style.setProperty('--bg-translate-x', `${-35 + 20 * (1 - ratioX)}px`)
    document.documentElement.style.setProperty('--bg-translate-y', `${-35 + 20 * (1 - ratioY)}px`)
}

export function onDeviceOrientation(event: DeviceOrientationEvent) {
    const leftToRight = event.gamma || 0
    const frontToBack = event.beta || 0

    const ratioX = Math.max(Math.min(leftToRight / 50, 1), -1)
    const ratioY = Math.max(Math.min((frontToBack - 30) / 30, 1), -1)

    document.documentElement.style.setProperty('--bg-translate-x', `${-25 + 20 * ratioX}px`)
    document.documentElement.style.setProperty('--bg-translate-y', `${-25 + 20 * ratioY}px`)
}
