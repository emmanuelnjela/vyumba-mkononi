function CreateObserver(config, callback) {

    return new IntersectionObserver(callback, config)
}