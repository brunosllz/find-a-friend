export function parseRouteParams(value: any) {
  const params = new URLSearchParams(value)

  return Array.from(params.keys()).reduce((obj, key) => {
    const values = params
      .getAll(key)
      .map((value) => decodeURIComponent(value.replace(/\+/g, ' ')))

    obj[key] = values[0]

    return obj
  }, {} as { [key: string]: string })
}
