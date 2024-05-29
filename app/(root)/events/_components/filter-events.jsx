import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const FilterEvents = ({ setFilterDate, setFilterLocation, events }) => {
  // Create a list of unique locations
  const locations = [...new Set(events.map(event => event.location))]

  // Create a list of unique dates
  const dates = [...new Set(events.map(event => event.date))]

  return (
    <div className="flex flex-wrap justify-center mb-10 gap-10">
      <Select onChange={e => setFilterDate(e.target.value)}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select date" />
        </SelectTrigger>
        <SelectContent>
          {dates.map(date => (
            <SelectItem key={date} value={date}>{date}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select onChange={e => setFilterLocation(e.target.value)}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select location" />
        </SelectTrigger>
        <SelectContent>
          {locations.map(location => (
            <SelectItem key={location} value={location}>{location}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}