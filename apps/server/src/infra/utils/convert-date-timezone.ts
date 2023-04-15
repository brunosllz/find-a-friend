import dayjs from 'dayjs'

export function convertDateTimezone(date: string) {
  return dayjs.utc(date).tz('America/Sao_Paulo').format()
}
