package com.assistcontrolapp.controller;

import com.assistcontrolapp.exeption.ResourceNotFoundException;
import com.assistcontrolapp.model.Cargo;
import com.assistcontrolapp.repository.CargoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api")
public class CargoController {

    @Autowired
    private CargoRepository cargoRepository;

    //listar cargos
    @GetMapping("/cargos")
    private List<Cargo> listarCargos(){

        return cargoRepository.findAll();
    }
    //Buscar Cargo por id
    @GetMapping("/cargos/{id}")
    public ResponseEntity<Cargo> listarCargoPorId(@PathVariable Long id){
        Cargo cargo = cargoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("El cargo con ese ID no existe :"+ id));
        return ResponseEntity.ok(cargo);
    }

    //guardar cargo Nuevo
    @PostMapping("/cargos")
    public Cargo guardarCargo(@RequestBody Cargo cargo){

        return cargoRepository.save(cargo);
    }

    //actualizar cargo
    public ResponseEntity<Cargo> actualizarCargo(@PathVariable Long id, @RequestBody Cargo cargoRequest){
        Cargo cargo = cargoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("El cargo con ese ID no existe :"+ id));
        cargo.setNombreCargo(cargoRequest.getNombreCargo());

        Cargo cargoActualizado = cargoRepository.save(cargo);

        return ResponseEntity.ok(cargoActualizado);
    }

    //Eliminar cargo
    @DeleteMapping("/cargos/{id}")
    public ResponseEntity<Map<String,Boolean>> eliminarCargo(@PathVariable Long id){
        Cargo cargo = cargoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("El cargo con ese ID no existe :"+ id));
        cargoRepository.delete(cargo);
        Map<String,Boolean> response= new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }




}
