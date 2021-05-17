import { BigInt } from "@graphprotocol/graph-ts"
import {
  MetaverseNFT,
  Approval,
  ApprovalForAll,
  Burn,
  MintFeeAddressTransferred,
  OwnershipTransferred,
  Paused,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SetMintFeeAmount,
  Transfer,
  Unpaused
} from "../generated/MetaverseNFT/MetaverseNFT"
import { MtNFT } from "../generated/schema"

export function handleApproval(event: Approval): void {
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleBurn(event: Burn): void {}

export function handleMintFeeAddressTransferred(
  event: MintFeeAddressTransferred
): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaused(event: Paused): void {}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleSetMintFeeAmount(event: SetMintFeeAmount): void {}

export function handleTransfer(event: Transfer): void {

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (event.params.from.toHex() == "0x0000000000000000000000000000000000000000000000000000000000000000") {
    let entity = new MtNFT(event.params.tokenId.toHex())

    // Entity fields can be set using simple assignments
    entity.owner = event.params.to
  // Entities can be written to the store with `.save()`
    entity.save()
  }

}

export function handleUnpaused(event: Unpaused): void {}
