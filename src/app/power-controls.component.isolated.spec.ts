import { PowerControlsComponent } from './power-controls.component'
import { PowerLocation } from '../shared/power-location.model'

describe('PowerControlsComponent', () => {
    let powerControls: PowerControlsComponent
    let mockService

    beforeEach(() => {
        mockService = {
            locations: [{ name: 'test', heatingNodeName: 'tust'}]
        }
        powerControls = new PowerControlsComponent(mockService)
    })
    it('should get power controls from service', () => {
        powerControls.ngOnInit()
        expect(powerControls.powerLocations.length).toEqual(1)
    })
})
