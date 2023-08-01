package com.assistcontrolapp.controller;


import com.assistcontrolapp.exeption.ResourceNotFoundException;
import com.assistcontrolapp.model.Empleado;
import com.assistcontrolapp.model.EmpleadoCargoTipoContrato;
import com.assistcontrolapp.repository.EmpleadoCargoTipoContratoRepository;
import com.assistcontrolapp.repository.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api")
public class EmpleadoController {

    @Autowired
    private EmpleadoRepository empleadoRepository;

    @Autowired
    private EmpleadoCargoTipoContratoRepository empleadoCargoTipoContratoRepository;

    //Listar empleados
    @GetMapping("/empleados")
    private List<Empleado> listarEmpleados(){

        return empleadoRepository.findAll();
    }

    // guardar un empleado
    @PostMapping("/empleados")
    public Empleado guardarEmpleado(@RequestBody Empleado empleado){

        return empleadoRepository.save(empleado);
    }


    // buscar empleado por id
    @GetMapping("/empleados/{id}")
    public ResponseEntity<Empleado> listarEmpleadoPorId(@PathVariable Long id){
        Empleado empleado = empleadoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("El empleado con ese ID no existe :"+ id));
        return ResponseEntity.ok(empleado);
    }



    // actualizar empleado
    @PutMapping("/empleados/{id}")
    public ResponseEntity<Empleado> actualizarEmpleado(@PathVariable Long id, @RequestBody Empleado empleadoRequest){
        Empleado empleado = empleadoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("El empleado con ese ID no existe :"+ id));
        empleado.setNombre(empleadoRequest.getNombre());
        empleado.setApellido(empleadoRequest.getApellido());
        empleado.setCorreo(empleadoRequest.getCorreo());
        empleado.setIdCargo(empleadoRequest.getIdCargo());
        empleado.setIdContrato(empleadoRequest.getIdContrato());

        Empleado empleadoActualizado = empleadoRepository.save(empleado);

        return ResponseEntity.ok(empleadoActualizado);
    }

    //eliminar empleado
    @DeleteMapping("/empleados/{id}")
    public ResponseEntity<Map<String,Boolean>> eliminarEmpleado(@PathVariable Long id){
        Empleado empleado = empleadoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("El empleado con ese ID no existe :"+ id));
        empleadoRepository.delete(empleado);
        Map<String,Boolean> response= new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


    // buscar empleado por nombre

    @GetMapping("/empleados/nombre/{nombre}")
    public ResponseEntity<List<Empleado>> listarEmpleadoPorNombre(@PathVariable String nombre) {
        List<Empleado> empleado = empleadoRepository.findByName(nombre);
        return ResponseEntity.ok(empleado);
    }
    // buscar empleado por tipo contrato
    @GetMapping("/empleados/tipoContrato/{nombre}")
    public ResponseEntity<List<Empleado>> listarEmpleadoPorTipoContrato(@PathVariable String nombre) {
        List<Empleado> empleado = empleadoRepository.findByTypeOfContractName(nombre);
        return ResponseEntity.ok(empleado);
    }
    // buscar empleado por cargo
    @GetMapping("/empleados/cargo/{nombre}")
    public ResponseEntity<List<Empleado>> listarEmpleadoPorCargo(@PathVariable String nombre) {
        List<Empleado> empleado = empleadoRepository.findBypositionName(nombre);
        return ResponseEntity.ok(empleado);
    }

    @GetMapping("/empleados/all")
    public ResponseEntity<List<EmpleadoCargoTipoContrato>> listarEmpleadoConCargoYTipoContrato(){
        List<EmpleadoCargoTipoContrato> empleado = empleadoCargoTipoContratoRepository.findAllWithPositionAndContract();
        return ResponseEntity.ok(empleado);
    }

}
