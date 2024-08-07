export const formatHostnames = (mergeHostnames: string) => {
    let hostnames = mergeHostnames;
    if (hostnames.length > 25) {
        hostnames = hostnames.substring(0, 25) + "...";
    }
    hostnames = hostnames.split(',').join(', ');
    return hostnames;
}