function handleKey(event, action, callback) {
    if (event.code === 'Space' || event.code === 'Enter') {
        callback(action);
    }
}

export {handleKey}
